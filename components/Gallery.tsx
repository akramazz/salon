"use client";

export default function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-scroll">
        <div className="gallery-card">
          <img src="/images/salon1.jpg" alt="Salon 1" />
          <div className="overlay"><h3>Salon Interior</h3></div>
        </div>
        <div className="gallery-card">
          <img src="/images/salon2.jpg" alt="Salon 2" />
          <div className="overlay"><h3>Barber Work</h3></div>
        </div>
        <div className="gallery-card">
          <img src="/images/salon3.jpg" alt="Salon 3" />
          <div className="overlay"><h3>Stylish Cuts</h3></div>
        </div>
      </div>
    </section>
  );
}
