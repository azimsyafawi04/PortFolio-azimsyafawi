"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-left z-[100]"
      style={{ 
        scaleX: scrollYProgress, 
        backgroundColor: "var(--color-cyan)",
        boxShadow: "0 0 10px var(--color-cyan), 0 0 20px var(--color-cyan)"
      }}
    />
  );
}
