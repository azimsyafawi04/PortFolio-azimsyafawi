"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50 glassmorphism !bg-black/20 !backdrop-blur-[20px] !border-b !border-cyan-500/20 perspective-container"
    >
      <div 
        className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between"
        style={{ transform: "translateZ(10px)" }}
      >
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white transition-all duration-300 hover:scale-105 hover:glow-text-cyan">
          {PORTFOLIO_DATA.name}
          <Shield className="w-4 h-4 text-cyan-400" />
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
          {["Home", "About", "Projects", "Packages", "Contact"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative group hover:text-white transition-all duration-300 hover:-translate-y-1"
              style={{ transformStyle: "preserve-3d" }}
            >
              <span className="block group-hover:glow-text-cyan group-hover:rotate-x-12 group-hover:rotate-y-12 transition-transform duration-300">{item}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 shadow-[0_0_8px_#00f5ff] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
