"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import AboutSection from "@/components/Home/AboutSection";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonial from "@/components/Testimonial";
import Booking from "@/components/Booking";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <Pricing />
      <Gallery />
      <Testimonial />
      <Booking />
    </>
  );
}
