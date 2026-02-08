"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, Variants, Transition } from "framer-motion";

// Définir le type du variant
const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" } as Transition, // ✅ cast pour TypeScript
  },
};

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nom: ${form.name}%0ATéléphone: ${form.phone}%0AEmail: ${form.email}%0ASujet: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/+33650534590?text=${message}`, "_blank");
  };

  return (
    <section className="lux-contact-section" id="contact">
      <div className="lux-contact-container">
        {/* Infos contact */}
        <motion.div
          className="lux-contact-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideFromLeft}
        >
          <h2>Entrer en contact</h2>
          <p>
            Découvrez l’expérience premium de Reflet D'Homme. Pour toute demande
            de rendez-vous ou renseignement, contactez-nous.
          </p>
          <p>
            <strong>Adresse:</strong> 71 Avenue Victor Hugo, Boulogne
            Billancourt 92100
          </p>
          <p>
            <strong>Téléphone:</strong> 09 80 27 41 11
          </p>
          <p>
            <strong>Email:</strong> info@barber.com
          </p>
          <div className="lux-contact-image">
            <Image
              src="/images/barber.png"
              alt="Reflet D'Homme"
              width={400}
              height={300}
              className="lux-image"
            />
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.form
          className="lux-contact-form"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={slideFromLeft}
          transition={{ delay: 0.2 }} // léger décalage pour effet
        >
          <input
            type="text"
            name="name"
            placeholder="Nom"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Téléphone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={form.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Envoyer via WhatsApp</button>
        </motion.form>
      </div>
    </section>
  );
}
