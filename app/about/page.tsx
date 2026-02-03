"use client";
import HeroFull from "@/components/HeroFull";
import Section from "@/components/Section";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <HeroFull
        image="/images/about-hero.jpg"
        title="ABOUT US"
        subtitle="Our History"
      />

      <Section
        title="Since 2006"
        subtitle="Perukar Barber Shop"
        text="Come experience a unique and edgy barbershop for all your hair and beard needs. Ravida haretra nuam enim mi obortis eset uctus enec accumsan eu justo alisuame amet auctor orci donec vitae vehicula risus."
        image="/images/about-bg2.jpg"
      />

      <Section
        title="17 Years of Experience"
        subtitle="Making people look awesome since 2006"
        text="Vulputate ons amet ravida haretra nuam the drana miss uctus enec accumsan justo aliquam sit amet auctor orci done vitae risus duise nunc sapien."
        image="/images/founder.jpg"
      />

      <Section
        title="Watch Our Barbershop Promo Video"
        video="/videos/promo.mp4"
      />

      <Footer />
    </>
  );
}
