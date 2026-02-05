"use client";

import { motion } from "framer-motion";

type HeroFullProps = {
  video: string;
  poster?: string;
  title: string;
  subtitle: string;
  buttonText?: string;
};

export default function HeroFull({
  video,
  poster,
  title,
  subtitle,
  buttonText,
}: HeroFullProps) {
  const letters = title.split("");

  const whatsappNumber = "0980274111";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section className="hero-full">
      {/* VIDEO BACKGROUND */}
      <video
        className="hero-bg"
        src={video}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* OVERLAY CINÉMA */}
      <div className="hero-overlay" />

      {/* CONTENT */}
      <div className="hero-content">
        <h1>
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * index, duration: 0.6, ease: "easeOut" }}
              className="lux-letter"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="lux-subtitle"
        >
          {subtitle}
        </motion.p>

        {buttonText && (
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
          >
            {buttonText}
          </motion.a>
        )}
      </div>
    </section>
  );
}
