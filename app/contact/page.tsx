"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./contact.css"; // <-- IMPORT CSS ICI

export default function ContactPage() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [played, setPlayed] = useState(false); // pour mobile

  const sendToWhatsApp = () => {
    const phone = "+33980274111"; // Numéro WhatsApp
    const text = `Nom: ${name}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phone}?text=${encodedText}`, "_blank");
  };

  return (
    <main className="contact-page">
      {/* HERO VIDEO */}
      <section className="contact-hero">
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/coiffer.mp4"
        />

        {/* BOUTON PLAY POUR MOBILE */}
        {!played && (
          <button
            className="hero-play-btn"
            onClick={() => {
              if (videoRef.current) {
                videoRef.current.play();
                setPlayed(true);
              }
            }}
          >
            ▶
          </button>
        )}

        <div className="hero-overlay" />
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Contactez Reflet d’Homme</h1>
          <p>Envoyez-nous un message ou réservez via WhatsApp</p>
        </motion.div>
      </section>

      {/* FORMULAIRE WHATSAPP */}
      <section className="contact-form-section">
        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2>Envoyer un message</h2>
          <input
            type="text"
            placeholder="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendToWhatsApp}>Envoyer sur WhatsApp</button>
        </motion.div>
      </section>

      {/* INFOS DU SALON */}
      <section className="contact-info-section">
        <motion.div
          className="contact-info-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2>Nos informations</h2>
          <p>
            <strong>Adresse :</strong> 71 Avenue Victor Hugo, Boulogne Billancourt 92100
          </p>
          <p>
            <strong>Téléphone :</strong> 09 80 27 41 11
          </p>
          <p>
            <strong>Horaires :</strong> Lun. - Sam. 9h30 - 19h30 | Dimanche 10h30 - 17h30
          </p>
        </motion.div>
      </section>

      {/* RESEAUX SOCIAUX */}
      <section className="contact-socials-section">
        <h2>Suivez-nous</h2>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/reflet_dhomme/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/instagram.png" alt="Instagram" width={50} height={50} />
          </a>
          <a
            href="https://www.tiktok.com/@reflet_dhomme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/tiktok.png" alt="TikTok" width={50} height={50} />
          </a>
          <a
            href="https://wa.me/+33980274111"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/images/black.png" alt="WhatsApp" width={50} height={50} />
          </a>
          <h1 className="contact-title">Reflet d’Homme</h1>
        </div>
      </section>
    </main>
  );
}
