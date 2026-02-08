"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "./gallery.css";

const images = [
  "/images/A.jpeg",
  "/images/b.jpeg",
  "/images/barbe.jpg",
  "/images/barbe.png",
  "/images/c.jpeg",
  "/images/coupe1.jpg",
  "/images/coupe2.jpg",
  "/images/coupe3.jpg",
  "/images/coupe4.jpg",
  "/images/d.jpeg",
  "/images/e.jpeg",
  "/images/enfant1.jpg",
  "/images/enfant2.jpg",
  "/images/soin.jpg",
  "/images/salon.jpg",
  "/images/salonn.jpg",
];

export default function GalleryPage() {
  return (
    <main className="gallery-page">
      {/* HERO */}
      <section className="gallery-hero">
        <video
          className="hero-video"
          src="/videos/coiffer.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Styles de Luxe & Premium{" "}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Styles Haut de Gamme{" "}
          </motion.p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="gallery-grid-section">
        <div className="gallery-grid">
          {images.map((src, index) => (
            <motion.div
              className="gallery-card"
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={src}
                alt={`Gallery ${index}`}
                width={400}
                height={400}
                className="gallery-img"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
