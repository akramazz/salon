"use client";
import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/Home/AboutSection";

export default function HomePage() {
  return (
    <main className="font-poppins">
      <Hero />
      <AboutSection />
      {/* Ajouter Services, Gallery, Testimonial plus tard */}
    </main>
  );
}
