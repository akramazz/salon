"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

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

  return (
    <section className="lux-gallery">
      <div className="lux-gallery-title">
        <h2>Notre Galerie</h2>
        <p>Découvrez l’univers premium de Reflet D'Homme</p>
      </div>

      <div className="lux-carousel-wrapper" ref={scrollRef}>
        <div className="lux-carousel">
          {galleryImages.map((img, index) => (
            <div key={index} className="lux-card">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
