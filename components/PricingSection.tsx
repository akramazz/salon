"use client";

const services = [
  {
    title: "Coupe + Barbe",
    price: "25€",
    desc: "Service complet avec coupe moderne et barbe structurée. Finitions précises pour un look élégant et professionnel.",
  },
  {
    title: "Coupe Homme",
    price: "16€",
    desc: "Coupe soignée adaptée à votre style et votre morphologie. Résultat propre et facile à coiffer.",
  },
  {
    title: "Coupe Enfant",
    price: "12€",
    desc: "Coupe enfant réalisée avec patience et précision pour un confort optimal.",
  },
];

export default function PricingSection() {
  return (
    <section className="pricing">
      <div className="pricing-header">
        <h2>Notre Liste de Prix</h2>
        <p>Des services premium pour l’homme moderne</p>
      </div>

      <div className="pricing-grid">
        {services.map((service, index) => (
          <div key={index} className="pricing-card">
            <div className="price">{service.price}</div>

            <h3>{service.title}</h3>

            <p>{service.desc}</p>

            <a
              href="https://wa.me/33980274111"
              target="_blank"
              className="book-btn"
            >
              Prendre Rendez-vous
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
