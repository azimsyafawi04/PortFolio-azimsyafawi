"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the welcome screen after 2.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="intro-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0f] flex items-center justify-center overflow-hidden"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white tracking-[0.3em] uppercase glow-text-cyan text-center"
              animate={{ textShadow: ["0 0 10px #00f5ff", "0 0 30px #00f5ff", "0 0 10px #00f5ff"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Welcome
            </motion.h1>
            
            <div className="w-64 h-1 bg-neutral-900 rounded-full overflow-hidden relative">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_15px_#00f5ff]"
              />
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-cyan-400 font-mono text-sm tracking-widest uppercase"
            >
              Initializing Workspace...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
