"use client";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="fade-in">Stay Sharp, Look Good</h1>
        <h2 className="fade-in delay-1">NYC IS FAVOURITE BARBER SHOP</h2>
        <p className="fade-in delay-2">
          Broadway St, NYC. Appointment: 855 100 4444
        </p>
        <a href="/booking" className="btn fade-in delay-3">Book Appointment</a>
      </div>
      <video className="hero-video" autoPlay loop muted>
        <source src="/videos/promo.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
