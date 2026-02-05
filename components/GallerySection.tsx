"use client";

import Image from "next/image";

const images = [
  "/images/coupe1.jpg",
  "/images/coupe2.jpg",
  "/images/coupe3.jpg",
  "/images/coupe4.jpg",
  "/images/enfant2.jpg",
  "/images/coupe1.jpg",
  "/images/barbe.jpg",
  "/images/barbe.png",
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
              style={{ objectFit: "cover" }}
            />
            <div className="overlay">
              <div className="logo-circle">
                <Image
                  src="/images/logo.png"
                  alt="Reflet D'Homme"
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="logo-text">Reflet D’Homme</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
