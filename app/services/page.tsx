"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

const servicesList = [
  {
    title: "Moustache Trim",
    desc: "Service Moustache Trim professionnel pour un style parfait.",
    img: "/images/coupe1.jpg",
  },
  {
    title: "Face Shave",
    desc: "Rasage du visage précis et confortable.",
    img: "/images/coupe2.jpg",
  },
  {
    title: "Beard Trim",
    desc: "Taille de barbe experte pour un look raffiné.",
    img: "/images/coupe3.jpg",
  },
  {
    title: "Haircut",
    desc: "Coupe de cheveux sur-mesure.",
    img: "/images/coupe4.jpg",
  },
  {
    title: "Facial & Massage",
    desc: "Soin du visage et massage relaxant.",
    img: "/images/soin.jpg",
  },
  {
    title: "Hair Washing",
    desc: "Lavage des cheveux luxueux et revitalisant.",
    img: "/images/barbe.jpg",
  },
  {
    title: "Hair Dryer",
    desc: "Brushing parfait pour un style impeccable.",
    img: "/images/enfant2.jpg",
  },
  {
    title: "Coloring",
    desc: "Coloration professionnelle pour un rendu haut de gamme.",
    img: "/images/barbe.png",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [played, setPlayed] = useState(false); // pour mobile

  return (
    <main className="lux-services">
      {/* HERO FULLSCREEN */}
      <section className="lux-services-hero">
        <video
          ref={videoRef}
          src="/videos/vid2.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="hero-bg-video animate-zoom"
        />

        {/* BOUTON PLAY SUR MOBILE */}
        {!played && (
          <button
            className="hero-play-btn"
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.muted = false; // activer son si besoin
                videoRef.current.play();
                setPlayed(true);
              }
            }}
          >
            ▶
          </button>
        )}

        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            CE QUE NOUS FAISONS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Nos Services
          </motion.p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="lux-services-grid">
        {servicesList.map((service, index) => (
          <motion.div
            key={index}
            className="lux-service-card"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`lux-card-inner ${hoveredIndex === index ? "hovered" : ""}`}
            >
              {/* FRONT */}
              <div className="lux-card-front">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="lux-card-bg"
                />
                <div className="lux-card-overlay" />
              </div>

              {/* BACK */}
              <div className="lux-card-back">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {service.title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {service.desc}
                </motion.p>

                {hoveredIndex === index && (
                  <motion.div
                    className="service-logo"
                    initial={{ scale: 0, rotate: -30, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    <Image src="/images/logo2.png" alt="Logo" width={80} height={80} />
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
