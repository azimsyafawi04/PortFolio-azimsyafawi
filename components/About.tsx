"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-[120vh] py-24 px-6 flex items-center relative z-10 pointer-events-none">
      <div className="max-w-5xl mx-auto w-full pointer-events-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight text-white mb-12 glow-text-cyan"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-neutral-300 text-lg leading-relaxed whitespace-pre-wrap glassmorphism p-6 rounded-2xl">
              {PORTFOLIO_DATA.about}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-purple-400 mb-6 glow-text-purple">Skills</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {PORTFOLIO_DATA.skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="px-4 py-2 text-sm font-medium text-cyan-50 transition-all duration-300 cursor-default glassmorphism-badge animate-float-badge hover:scale-110 hover:shadow-[0_0_15px_#00f5ff] hover:text-white hover:border-cyan-400 rounded-full"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {skill}
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-purple-400 mb-6 glow-text-purple">Certifications & Achievements</h3>
            <div className="flex flex-col gap-4">
              {PORTFOLIO_DATA.certifications?.map((cert, index) => (
                <div 
                  key={cert}
                  className="px-5 py-4 text-sm font-medium text-neutral-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(123,47,255,0.4)] hover:border-purple-500 glassmorphism rounded-xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
