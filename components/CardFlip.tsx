"use client";
import { useState } from "react";

type CardFlipProps = {
  frontImage: string;
  title: string;
  backText: string;
};

export default function CardFlip({ frontImage, title, backText }: CardFlipProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`card-flip ${flipped ? "flipped" : ""}`} onClick={() => setFlipped(!flipped)}>
      <div className="card-front">
        <img src={frontImage} alt={title} />
        <h4>{title}</h4>
      </div>
      <div className="card-back">
        <p>{backText}</p>
      </div>
    </div>
  );
}
