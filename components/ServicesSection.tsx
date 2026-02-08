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
    frontImg: "/images/enfant1.jpg",
    title: "Coupe Enfant",
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

// Animation variants Framer Motion
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="services">
      <div className="services-header">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariants}
        >
          Nos Services Premium
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ ...textVariants, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
        >
          L’expérience grooming masculine ultime
        </motion.p>
      </div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: index * 0.2 } } }}
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
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
              >
                {service.title}
              </motion.h3>
            </div>

            {/* DESCRIPTION BACK */}
            {hoveredIndex === index && (
              <motion.div
                className="card-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }}
                >
                  {service.description}
                </motion.p>
                <div className="card-logo">
                  <Image
                    src="/images/logo2.png"
                    alt="Reflet d'Homme"
                    width={60}
                    height={60}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
