"use client";
import { motion } from "framer-motion";

type HeroFullProps = {
  image: string;
  title: string;
  subtitle: string;
};

export default function HeroFull({ image, title, subtitle }: HeroFullProps) {
  return (
    <section className="hero-full">
      <motion.div
        className="hero-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <img src={image} alt="Hero" className="hero-bg" />
      <motion.div
        className="hero-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </motion.div>
    </section>
  );
}
