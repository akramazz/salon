"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scroll ? "navbar-scrolled" : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="logo">
          <Image src="/images/logo.png" alt="Logo Reflet D'Homme" width={50} height={50} />
          <span>Reflet D'Homme</span>
        </div>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="burger" onClick={() => setOpen(!open)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.nav>
  );
}
