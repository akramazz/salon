"use client";
import HeroFull from "@/components/HeroFull";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <HeroFull
        image="/images/contact-hero.jpg"
        title="ENTRER EN CONTACT"
        subtitle="Contactez-nous"
      />

      <Section title="Informations de contact" subtitle="Entrer en contact">
        <p>Barber utate ons amet ravida haretra nuam the drana miss uctus the drana accumsan justo aliquam sit amet auctor orci done vitae.</p>
        <ul>
          <li>Adresse: 71 Avenue Victor Hugo, Boulogne Billancourt 92100</li>
          <li>Téléphone: +09 80 27 41 11</li>
          <li>E-mail: info@barber.com</li>
        </ul>

        <form action="https://api.whatsapp.com/send?phone=+33698027411" target="_blank">
          <input type="text" placeholder="Nom" required />
          <input type="tel" placeholder="Téléphone" required />
          <input type="email" placeholder="E-mail" required />
          <input type="text" placeholder="Sujet" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Envoyer via WhatsApp</button>
        </form>

        <div className="social-icons">
          <a href="https://www.facebook.com/reflet_dhomme" target="_blank">Facebook</a>
          <a href="https://www.instagram.com/reflet_dhomme" target="_blank">Instagram</a>
          <a href="https://www.tiktok.com/@reflet_dhomme" target="_blank">TikTok</a>
          <a href="https://wa.me/33698027411" target="_blank">WhatsApp</a>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999877!2d2.2472!3d48.8401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b0c1f0f0f1d%3A0xabc123def!2sReflet%20D'Homme!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
          width="100%"
          height="400"
          style={{border:0}}
          allowFullScreen={true}
          loading="lazy"
        />
      </Section>

      <Footer />
    </>
  );
}
