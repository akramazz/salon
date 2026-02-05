"use client";

import { useState, useEffect } from "react";
import HeroFull from "@/components/HeroFull";
import Loader from "@/components/Loader";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import ToolsScroll from "@/components/ToolsScroll";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <main>
      {/* HERO VIDEO */}
      <HeroFull
        video="/videos/coiffer.mp4"
        poster="/images/hero.jpg"
        title="REFLET D'HOMME"
        subtitle="L’Excellence du grooming masculin"
        buttonText="Réservez votre rendez-vous"
      />

      {/* SERVICES */}
      <ServicesSection />

      {/* PRICING */}
      <PricingSection />

      {/* GALLERY */}
      <GallerySection />

      {/* CONTACT */}
      <ContactSection />
      {/* TOOLS SCROLL */} 
      <ToolsScroll />
      
    </main>
  );
}
