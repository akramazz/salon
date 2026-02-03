"use client";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import HeroFull from "@/components/HeroFull";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <HeroFull />
      <ServicesSection />
      <PricingSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
