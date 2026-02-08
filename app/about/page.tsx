"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const services = [
    {
      title: "Coupes de précision",
      img: "/images/coupe1.jpg",
    },
    {
      title: "Soin barbe de luxe",
      img: "/images/barbe.jpg",
    },
    {
      title: "Coupe Enfant",
      img: "/images/enfant2.jpg",
    },
  ];

  const barbers = [
    "/images/coupe1.jpg",
    "/images/coupe2.jpg",
    "/images/coupe3.jpg",
    "/images/coupe4.jpg",
  ];

  return (
    <main>
      {/* HERO */}
<section className="about-hero-premium">
  <Image
    src="/images/maps2.jpg"
    alt="Salon Reflet D’Homme"
    fill
    className="hero-bg-image"
    priority
  />
  <div className="hero-overlay" />

  <div className="hero-content">
    <motion.h1
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      REFLET D’HOMME
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      NOTRE HISTOIRE — DEPUIS 2025
    </motion.p>
  </div>
</section>


      {/* STORY */}
      <section className="about-story">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h2>Notre Histoire</h2>
          <p>
            Fondé en 2025 au cœur du prestigieux quartier de
            Boulogne-Billancourt,
            <strong> Reflet D’Homme </strong> est né d’une ambition claire :
            redéfinir l’expérience du barbershop moderne à travers l’élégance,
            la précision et un service d’exception.
          </p>
          <p>
            Plus qu’une simple coupe, nous offrons un véritable moment de
            confiance et de bien-être. Chaque détail de notre espace a été pensé
            pour créer une atmosphère raffinée où la tradition rencontre le luxe
            contemporain.
          </p>
          <p>
            Notre équipe de quatre barbiers experts associe maîtrise technique
            et sens artistique afin de créer des styles qui reflètent votre
            personnalité. Chez Reflet D’Homme, l’excellence n’est pas une option
            — c’est notre signature.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src="/images/logo2.png"
            alt="Outils de barbier"
            width={700}
            height={900}
            className="about-img"
          />
        </motion.div>
      </section>

      {/* EXPERTISE */}
      <section className="services-premium">
        <h1>Notre Expertise</h1>
        <div className="services-grid-premium">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-premium"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="service-bg"
              />
              <div className="service-gradient" />
              <h2>{service.title}</h2>
            </motion.div>
          ))}
        </div>
      </section>

     

      {/* VIDEO */}
      <section style={{ padding: "160px 7%", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "3rem",
            color: "#bfaf7b",
            marginBottom: "40px",
          }}
        >
          Découvrez Notre Univers
        </h2>
        <video
          src="/videos/vid2.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            maxWidth: "1100px",
            borderRadius: "20px",
            boxShadow: "0 40px 120px rgba(191,175,123,0.25)",
          }}
        />
      </section>
    </main>
  );
}
