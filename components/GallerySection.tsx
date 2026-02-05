"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Images de la galerie
const galleryImages = [
  "/images/coupe1.jpg",
  "/images/coupe2.jpg",
  "/images/coupe3.jpg",
  "/images/coupe4.jpg",
  "/images/enfant2.jpg",
];

export default function LuxuryGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let pos = 0;
    let reqId: number;

    const step = () => {
      pos += 0.3; // vitesse du scroll
      if (container.scrollWidth - container.clientWidth <= pos) pos = 0;
      container.scrollLeft = pos;
      reqId = requestAnimationFrame(step);
    };

    reqId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(reqId);
  }, []);

  // Variants pour le texte
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="lux-gallery">
      <motion.div
        className="lux-gallery-title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={fadeUp}>Notre Galerie</motion.h2>
        <motion.p variants={fadeUp}>Découvrez l’univers premium de Reflet D'Homme</motion.p>
      </motion.div>

      <div className="lux-carousel-wrapper" ref={scrollRef}>
        <div className="lux-carousel">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              className="lux-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="lux-img-container">
                <Image
                  src={img}
                  alt="Galerie Reflet D'Homme"
                  fill
                  className="lux-img"
                />
                <div className="lux-logo-circle">
                  <Image
                    src="/images/logo.png"
                    alt="Logo Galerie"
                    width={40}
                    height={40}
                  />
                  <span className="lux-logo-text">Reflet D'Homme</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
