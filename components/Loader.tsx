"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="loader-screen">
      <motion.div
        className="loader-circle"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Reflet D’Homme
      </motion.p>
    </div>
  );
}
