"use client";

import Image from "next/image";

const images = [
  "/images/salon1.jpg",
  "/images/salon2.jpg",
  "/images/salon3.jpg",
  "/images/salon4.jpg",
  "/images/salon5.jpg",
  "/images/salon6.jpg",
];

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="gallery-title">
        <h2>Notre Galerie</h2>
        <p>Découvrez l’univers premium de Reflet D'Homme</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-card">
            <Image
              src={img}
              alt="Barber shop"
              fill
              className="gallery-img"
            />
            <div className="overlay">
              <span>Reflet D'Homme</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
