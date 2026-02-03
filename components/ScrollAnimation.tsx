"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type ScrollAnimationProps = {
  children: ReactNode;
};

export default function ScrollAnimation({ children }: ScrollAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.div>
  );
}
