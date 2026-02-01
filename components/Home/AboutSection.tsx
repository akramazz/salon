"use client";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <h2>About Us</h2>
      <p>
        Since 2006, Reflet D’Homme provides unique and edgy haircuts & beard styling.
        We use quality products to make you look perfect and care about customer satisfaction.
      </p>

      <div className="about-gallery">
        <div className="about-card">
          <img src="/images/salon1.jpg" alt="Salon Interior" />
          <div className="card-overlay">
            <h3>Modern Haircuts</h3>
            <p>Precision & Style</p>
          </div>
        </div>
        <div className="about-card">
          <img src="/images/salon2.jpg" alt="Barber Work" />
          <div className="card-overlay">
            <h3>Beard Styling</h3>
            <p>Classic & Modern</p>
          </div>
        </div>
        <div className="about-card">
          <img src="/images/salon3.jpg" alt="Interior" />
          <div className="card-overlay">
            <h3>Relaxing Ambiance</h3>
            <p>Comfort & Elegance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
