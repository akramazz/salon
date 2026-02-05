"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type ServiceCardProps = {
  frontImg: string;
  title: string;
  description: string;
};

const servicesData: ServiceCardProps[] = [
  {
    frontImg: "/images/barbe.jpg",
    title: "Barbe & Taille",
    description:
      "Expertise premium dans la taille et le soin de barbe pour un style parfait et moderne. Chaque détail compte pour un rendu ultra soigné.",
  },
  {
    frontImg: "/images/coifer.png",
    title: "Coiffure Premium",
    description:
      "Coupe et coiffure haut de gamme avec des techniques personnalisées pour chaque client. Style, élégance et précision sont nos maîtres mots.",
  },
  {
    frontImg: "/images/soin.jpg",
    title: "Soin & Grooming",
    description:
      "Soins du visage et du cuir chevelu pour une expérience luxe complète et relaxante. Produits premium pour un résultat visible et durable.",
  },
  {
    frontImg: "/images/coupe1.jpg",
    title: "Coupe Classique",
    description:
      "Coupe élégante et précise adaptée à votre style, avec un service ultra professionnel et personnalisé selon vos envies.",
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="services">
      <div className="services-header">
        <h2>Nos Services Premium</h2>
        <p>L’expérience grooming masculine ultime</p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
          >
            {/* IMAGE FRONT */}
            <div
              className="card-image-wrapper"
              style={{ display: hoveredIndex === index ? "none" : "flex" }}
            >
              <Image
                src={service.frontImg}
                alt={service.title}
                width={500}
                height={500}
                className="card-image"
              />
              <h3>{service.title}</h3>
            </div>

            {/* DESCRIPTION BACK */}
            {hoveredIndex === index && (
              <div className="card-description">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="card-logo">
                  <Image
                    src="/images/logo.png"
                    alt="Reflet d'Homme"
                    width={60}
                    height={60}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
