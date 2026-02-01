"use client";

export default function Booking() {
  return (
    <section id="booking" className="booking-section">
      <h2>Book Your Appointment</h2>
      <form className="booking-form">
        <input type="text" placeholder="Nom" required />
        <input type="text" placeholder="Prénom" required />
        <input type="tel" placeholder="Téléphone" required />
        <input type="date" required />
        <select>
          <option>Coupe Homme</option>
          <option>Beard Trim</option>
          <option>Hair Wash</option>
        </select>
        <button type="submit">Envoyer via WhatsApp</button>
      </form>
    </section>
  );
}
