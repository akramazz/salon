"use client";
import HeroFull from "@/components/HeroFull";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function PricingPage() {
  return (
    <>
      <HeroFull
        image="/images/pricing-hero.jpg"
        title="NOTRE LISTE DE PRIX"
        subtitle="Plan tarifaire"
      />

      <Section title="Coupe de cheveux">
        <ul>
          <li>
            Coupe de cheveux Perukar - 30$ : Coupe de cheveux, shampoing,
            massage du cuir chevelu, soin du visage à la serviette chaude.
          </li>
          <li>Coupe de cheveux avec dégradé à blanc - 20$</li>
          <li>Coupe de cheveux dégradée à blanc au rasoir - 15$</li>
        </ul>
      </Section>

      <Section title="Barbe / Rasage">
        <ul>
          <li>Taille de barbe de base - 25$</li>
          <li>Taille et contour de la barbe - 20$</li>
          <li>Rasoir électrique - 15$</li>
          <li>Rasage intégral du visage - 20$</li>
          <li>Rasage partiel du visage - 15$</li>
          <li>Rasage de la tête - 25$</li>
        </ul>
      </Section>

      <Section title="Rendez-vous">
        <form
          action="https://api.whatsapp.com/send?phone=+33698027411"
          target="_blank"
        >
          <input type="text" placeholder="Nom" required />
          <input type="tel" placeholder="Téléphone" required />
          <input type="date" required />
          <input type="time" required />
          <button type="submit">Prendre rendez-vous</button>
        </form>
      </Section>

      <Footer />
    </>
  );
}
