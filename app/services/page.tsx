"use client";
import HeroFull from "@/components/HeroFull";
import Section from "@/components/Section";
import CardFlip from "@/components/CardFlip";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <HeroFull
        image="/images/services-hero.jpg"
        title="CE QUE NOUS FAISONS"
        subtitle="Nos services"
      />

      <Section title="Nos Services">
        <div className="cardsGrid">
          <CardFlip
            frontImage="/images/service-haircut.jpg"
            title="Taille de moustache"
            backText="Coupe de moustache Coupe de cheveux drana lorem ipsum amet navida haretra nuam..."
          />
          <CardFlip
            frontImage="/images/service-shave.jpg"
            title="Rasage du visage"
            backText="Coupe de cheveux drana lorem ipsum amet navida haretra nuam..."
          />
          <CardFlip
            frontImage="/images/service-beard.jpg"
            title="Taille de barbe"
            backText="Coupe de cheveux drana lorem ipsum amet navida haretra nuam..."
          />
          <CardFlip
            frontImage="/images/service-haircut2.jpg"
            title="Coupe de cheveux"
            backText="Coupe de cheveux drana lorem ipsum amet navida haretra nuam..."
          />
          <CardFlip
            frontImage="/images/service-clipper.jpg"
            title="Coupe à la tondeuse"
            backText="Coupe de cheveux drana lorem ipsum amet navida haretra nuam..."
          />
          <CardFlip
            frontImage="/images/service-facial.jpg"
            title="Soins du visage et massages"
            backText="Coupe de cheveux drana lorem ipsum amet navida haretra nuam..."
          />
        </div>
      </Section>

      <Footer />
    </>
  );
}
