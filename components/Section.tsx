"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

type SectionProps = {
  title?: string;
  subtitle?: string;
  text?: string;
  image?: string;
  video?: string;
  children?: ReactNode;
};

export default function Section({ title, subtitle, text, image, video, children }: SectionProps) {
  return (
    <section className="section">
      {image && <img src={image} alt={title} className="section-bg" />}
      {video && <video src={video} autoPlay loop muted className="section-bg" />}
      <motion.div
        className="section-content"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {title && <h2>{title}</h2>}
        {subtitle && <h3>{subtitle}</h3>}
        {text && <p>{text}</p>}
        {children}
      </motion.div>
    </section>
  );
}
