"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="logo">
          <Image src="/images/logo.png" width={50} height={50} alt="Logo" />
          <span>Reflet D’Homme</span>
        </Link>

        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li><Link href="/home">Accueil</Link></li>
          <li><Link href="/about">À propos</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/pricing">Tarifs</Link></li>
          <li><Link href="/booking">RDV</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <div className="burger" onClick={() => setOpen(!open)}>☰</div>
      </div>
    </nav>
  );
}
