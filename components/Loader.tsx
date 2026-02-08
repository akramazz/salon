"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <div className="loader-screen">
      <motion.div
        className="loader-circle"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      >
        <Image
          src="/images/logo2.png"
          alt="Reflet D'Homme"
          width={60}
          height={60}
          style={{ borderRadius: "50%" }}
        />
      </motion.div>

      <motion.p
        className="loader-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        Reflet D’Homme
      </motion.p>
    </div>
  );
}
