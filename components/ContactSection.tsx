"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Rediriger vers WhatsApp ou envoyer email
    const message = `Nom: ${form.name}%0ATéléphone: ${form.phone}%0AEmail: ${form.email}%0ASujet: ${form.subject}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/33600000000?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="contact-section" style={{ padding: "100px 20px", backgroundColor: "#0a0a0a", color: "#fff" }}>
      <h2 className="text-4xl font-bold text-beige mb-8">Entrer en contact</h2>
      <div className="contact-container" style={{ display: "flex", flexWrap: "wrap", gap: "50px" }}>
        {/* Infos contact */}
        <div className="contact-info" style={{ flex: "1 1 300px" }}>
          <p>Barber utate ons amet ravida haretra nuam the duru miss uctus...</p>
          <p><strong>Adresse:</strong> 71 Avenue Victor Hugo, Boulogne Billancourt 92100</p>
          <p><strong>Téléphone:</strong> 09 80 27 41 11</p>
          <p><strong>Email:</strong> info@barber.com</p>
        </div>
        {/* Formulaire */}
        <form onSubmit={handleSubmit} style={{ flex: "1 1 300px", display: "flex", flexDirection: "column", gap: "15px" }}>
          <input type="text" name="name" placeholder="Nom" value={form.name} onChange={handleChange} required style={inputStyle} />
          <input type="tel" name="phone" placeholder="Téléphone" value={form.phone} onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="subject" placeholder="Sujet" value={form.subject} onChange={handleChange} style={inputStyle} />
          <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required style={{ ...inputStyle, minHeight: "120px" }} />
          <button type="submit" style={buttonStyle}>Envoyer via WhatsApp</button>
        </form>
      </div>
    </section>
  );
}

// Styles inline (ou tu peux les mettre dans globals.css)
const inputStyle: React.CSSProperties = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  backgroundColor: "#111",
  color: "#fff",
};

const buttonStyle: React.CSSProperties = {
  padding: "15px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#bfaF7b", // beige doré
  color: "#0a0a0a",
  fontWeight: "bold",
  cursor: "pointer",
};
