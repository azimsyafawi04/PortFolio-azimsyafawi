"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from "react";
import confetti from "canvas-confetti"; // Or we can use a simple custom particle burst

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBurst = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create a cyber-themed particle burst using canvas-confetti if installed, 
    // or simulate a UI state change.
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message transmitted through the neural net!");
    }, 1000);
  };

  return (
    <section id="contact" className="min-h-[120vh] py-24 px-6 flex items-center relative z-10 overflow-hidden pointer-events-none">
      {/* Animated gradient background specifically for the contact section */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-cyan-900/10 opacity-50 pointer-events-none" style={{ backgroundSize: '400% 400%', animation: 'gradientBG 15s ease infinite' }} />

      <div className="max-w-5xl mx-auto w-full relative z-10 pointer-events-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight text-white mb-12 glow-text-cyan"
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-neutral-300 text-lg leading-relaxed mb-8 glassmorphism p-6 rounded-2xl border-purple-500/30">
              I'm always open to discussing projects, cybersecurity operations, or partnership opportunities. 
              <br/><br/>
              <strong className="text-white glow-text-cyan">If you'd like to book a web development package, please reach out to me through any of the platforms below:</strong>
            </p>
            
            <div className="flex flex-col gap-6">
              {PORTFOLIO_DATA.contact.socials.map((social, idx) => (
                <motion.a 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-neutral-300 hover:text-cyan-400 transition-all w-fit"
                >
                  <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_#00f5ff] transition-all duration-300 border-cyan-500/30">
                    <social.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold tracking-wider">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col gap-5 glassmorphism p-8 rounded-2xl border-cyan-500/20" 
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-bold text-cyan-400 tracking-wider">
                NAME
              </label>
              <input 
                type="text" 
                id="name"
                className="bg-neutral-950/80 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.3)] shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] transition-all"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-bold text-cyan-400 tracking-wider">
                EMAIL
              </label>
              <input 
                type="email" 
                id="email"
                className="bg-neutral-950/80 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.3)] shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] transition-all"
                placeholder="john@example.com"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-bold text-cyan-400 tracking-wider">
                MESSAGE
              </label>
              <textarea 
                id="message"
                rows={4}
                className="bg-neutral-950/80 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,245,255,0.3)] shadow-[inset_0_2px_10px_rgba(0,0,0,0.8)] transition-all resize-none"
                placeholder="Enter coordinates..."
              ></textarea>
            </div>
            
            <button 
              onClick={handleBurst}
              className={`mt-4 bg-purple-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 
                shadow-[0_6px_0_#4a1c99,0_0_20px_rgba(123,47,255,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_0_#4a1c99,0_0_30px_rgba(123,47,255,0.6)] 
                active:translate-y-[6px] active:shadow-[0_0px_0_#4a1c99,inset_0_0_15px_rgba(0,0,0,0.5)] uppercase tracking-widest relative overflow-hidden`}
            >
              <span className={isSubmitting ? "opacity-0" : "opacity-100"}>Transmit Data</span>
              {isSubmitting && (
                <span className="absolute inset-0 flex items-center justify-center glow-text-cyan text-cyan-300">
                  Transmitting...
                </span>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
