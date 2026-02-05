"use client";

import Image from "next/image";

const tools = [
  "/images/razor.png",
  "/images/hairdressing-scissors.png",
  "/images/hairstyle.png",
  "/images/barber-shop.png",
  "/images/barber-pole.png",
  "/images/man.png",
  "/images/electric-razor.png",
  "/images/barber.png",
  "/images/scissors.png",
  "/images/beard.png",
];

export default function ToolsScroll() {
  return (
    <section className="tools-section">
      <h2 className="tools-title">Matériel Professionnel</h2>

      <div className="tools-slider">
        <div className="tools-track">
          {/* duplication pour scroll infini */}
          {[...tools, ...tools].map((tool, index) => (
            <div className="tool-item" key={index}>
              <Image
                src={tool}
                alt="outil coiffure"
                width={70}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
