"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const pricingList = [
  {
    category: "Services",
    services: [
      {
        title: "Coupe + Barbe",
        price: "25€",
        img: "/images/b.jpeg",
        desc: "Taille de barbe professionnelle pour homme, adaptée à tous les styles. Contours précis, finitions propres et conseils d’entretien. Barbe structurée pour un look moderne et soigné.",
      },
      {
        title: "Enfant",
        price: "12€",
        img: "/images/c.jpeg",
        desc: "Coupe enfant soignée, adaptée à tous les âges et types de cheveux. Accueil attentionné pour mettre les enfants à l’aise pendant la coupe. Résultat propre et moderne, facile à coiffer au quotidien.",
      },
      {
        title: "Homme",
        price: "16€",
        img: "/images/A.jpeg",
        desc: "Coupe classique pour homme, nette et stylée. Finitions précises et conseils pour un look impeccable chaque jour.",
      },
    ],
  },
];

export default function PricingPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="pricing-page">
      {/* HERO */}
      <section className="pricing-hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            OUR PRICE LIST
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Pricing Plan
          </motion.p>
        </div>
      </section>

      {/* PRICING SECTIONS */}
      {pricingList.map((category, catIndex) => (
        <section className="pricing-category" key={catIndex}>
          <h2>{category.category}</h2>
          <div className="pricing-grid">
            {category.services.map((service, index) => (
              <motion.div
                key={index}
                className="pricing-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className="pricing-img-wrapper">
                  <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="pricing-img"
                  />
                  <div className="pricing-overlay" />
{hoveredIndex === index && (
  <motion.div
    className="pricing-hover-desc"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
  >
    <p>{service.desc}</p>
    <div className="pricing-logo-circle">
      <Image
        src="/images/logo2.png"
        alt="Logo"
        width={60}
        height={60}
        className="circle-logo-img"
      />
    </div>
  </motion.div>
)}

                </div>
                <div className="pricing-content">
                  <h3>{service.title}</h3>
                  <span className="price">{service.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* CONTACT */}
      {/* CONTACT */}
<section className="pricing-contact">
  <h2>Appelez-nous ou réservez sur WhatsApp</h2>
  <p>📞 09 80 27 41 11</p>

  <a
    href="https://wa.me/213980274111" // remplace par ton numéro au format international (sans + ou espaces)
    target="_blank"
    rel="noopener noreferrer"
    className="whatsapp-btn"
  >
    📲 WhatsApp
  </a>
</section>

    </main>
  );
}
