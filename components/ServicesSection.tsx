"use client";

const services = [
  {
    title: "Coupe Premium",
    desc: "Une coupe précise adaptée à votre style pour une élégance naturelle.",
    icon: "✂️",
  },
  {
    title: "Barbe Sculptée",
    desc: "Taille et contours réalisés avec expertise pour un rendu parfait.",
    icon: "🧔",
  },
  {
    title: "Soin Visage",
    desc: "Nettoyage profond et soin revitalisant pour une peau impeccable.",
    icon: "💆",
  },
  {
    title: "Expérience Luxe",
    desc: "Serviette chaude, massage et détente pour un moment unique.",
    icon: "🔥",
  },
];

export default function ServicesSection() {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Nos Services Premium</h2>
        <p>L’excellence au service de votre image</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <span className="icon">{service.icon}</span>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
