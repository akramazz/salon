"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Coupe + Barbe",
    price: "25€",
    desc: "Service complet avec coupe moderne et barbe structurée. Finitions précises pour un look élégant et professionnel.",
    img: "/images/barbe.jpg",
  },
  {
    title: "Coupe Homme",
    price: "16€",
    desc: "Coupe soignée adaptée à votre style et votre morphologie. Résultat propre et facile à coiffer.",
    img: "/images/coupe1.jpg",
  },
  {
    title: "Coupe Enfant",
    price: "12€",
    desc: "Coupe enfant réalisée avec patience et précision pour un confort optimal.",
    img: "/images/coifer.png",
  },
];

// Variants Framer Motion pour l'effet fade-up
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: custom * 0.2, ease: "easeOut" },
  }),
};

export default function PricingSection() {
  return (
    <section className="pricing">
      <motion.div
        className="pricing-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 custom={0} variants={fadeUp}>
          Notre Liste de Prix
        </motion.h2>
        <motion.p custom={1} variants={fadeUp}>
          Des services premium pour l’homme moderne
        </motion.p>
      </motion.div>

      <div className="pricing-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="pricing-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
          >
            <div className="service-img-wrapper">
              <Image
                src={service.img}
                alt={service.title}
                width={400}
                height={250}
                className="service-img"
              />
            </div>

            <motion.div custom={index + 0.1} variants={fadeUp} className="price">
              {service.price}
            </motion.div>
            <motion.h3 custom={index + 0.2} variants={fadeUp}>
              {service.title}
            </motion.h3>
            <motion.p custom={index + 0.3} variants={fadeUp}>
              {service.desc}
            </motion.p>

            <motion.a
              href="https://wa.me/33980274111"
              target="_blank"
              className="book-btn"
              custom={index + 0.4}
              variants={fadeUp}
            >
              Prendre Rendez-vous
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
