"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type LandingIntroProps = {
  onEnter: () => void;
};

export default function LandingIntro({ onEnter }: LandingIntroProps) {
  const [showLogo, setShowLogo] = useState(false);

  const handleEnterClick = () => {
    setShowLogo(true);
    // Après animation, on entre dans le site
    setTimeout(() => {
      onEnter();
    }, 2000); // 2s pour animation du logo
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50 text-white px-6">
      {!showLogo ? (
        // Intro texte + bouton
        <motion.div
          className="max-w-3xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500 mb-4">
            Reflet D’Homme
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-6">
            Depuis 1998, notre salon offre une expérience unique pour l’homme moderne.  
            Style, précision et élégance à chaque coupe.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnterClick}
            className="bg-primary text-black px-8 py-4 rounded-full font-bold"
          >
            Entrer dans le site
          </motion.button>
        </motion.div>
      ) : (
        // Logo animé
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/images/logo.png"
            alt="Logo Reflet D'Homme"
            width={200}
            height={200}
            className="mb-6"
          />
          <motion.p
            className="text-yellow-500 text-xl md:text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Bienvenue chez Reflet D’Homme
          </motion.p>
        </motion.div>
      )}
    </div>
  );
}
