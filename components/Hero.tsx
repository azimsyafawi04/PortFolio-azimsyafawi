"use client";

import { PORTFOLIO_DATA } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Hero3D from "./Hero3D";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-start gap-6"
        >
          <h2 className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-[-10px] glow-text-cyan">
            HELLO, I'M
          </h2>
          
          <h1 className="text-6xl sm:text-8xl font-bold tracking-tight text-white animate-float">
            {PORTFOLIO_DATA.name}<span className="text-purple-500 glow-text-purple">.</span>
          </h1>
          
          <div className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-300 h-[40px] sm:h-[48px] mb-2">
            <TypeAnimation
              sequence={[
                PORTFOLIO_DATA.role,
                1000,
                'Cybersecurity Enthusiast',
                1000,
                'Full-Stack Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="glow-text-cyan"
            />
          </div>
          
          <div className="text-xs sm:text-sm font-bold tracking-widest text-cyan-300 uppercase glassmorphism-badge px-4 py-2 rounded-full -ml-4 shadow-[0_0_10px_rgba(0,245,255,0.1)]">
            FREELANCE WEB & MOBILE APP DEVELOPMENT
          </div>

          <p className="max-w-2xl text-neutral-400 text-lg sm:text-xl leading-relaxed mt-2">
            I am a second-year Computer System Security student at UniKL MIIT, working actively as a web and mobile app developer. <br/>
            I have a strong interest in security operations, penetration testing, and software engineering. <br/>
            I combine my coding skills with cybersecurity knowledge to build secure, functional, and high-performing digital solutions.
          </p>

          <div className="flex flex-col items-start gap-6 mt-8">
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-cyan-500 text-black px-8 py-4 rounded-full font-bold hover:bg-cyan-400 transition-all duration-300 shadow-[0_4px_0_#00a0a8,0_0_20px_rgba(0,245,255,0.4)] active:translate-y-[4px] active:shadow-[0_0_0_#00a0a8,0_0_10px_rgba(0,245,255,0.4)] hover:-translate-y-1 hover:shadow-[0_6px_0_#00a0a8,0_0_30px_rgba(0,245,255,0.6)]"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full font-semibold border border-purple-500 text-white hover:bg-purple-500/20 transition-all duration-300 shadow-[0_4px_0_#4a1c99,inset_0_0_10px_rgba(123,47,255,0.2)] active:translate-y-[4px] active:shadow-[0_0_0_#4a1c99,inset_0_0_5px_rgba(123,47,255,0.2)] hover:-translate-y-1 hover:shadow-[0_6px_0_#4a1c99,0_0_20px_rgba(123,47,255,0.4)] glassmorphism"
              >
                Discuss a Project
              </a>
            </div>
            
            <a 
              href="https://www.linkedin.com/in/azim-syafawi-0b249931a" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-neutral-400 hover:text-cyan-400 hover:glow-text-cyan transition-all duration-300 mt-2"
            >
              Or, Follow My LinkedIn <FaLinkedin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:flex w-full h-full min-h-[400px] lg:min-h-[600px] items-center justify-center relative pointer-events-none"
        >
          {/* Global3DCanvas handles the 3D object now. We leave this empty to maintain grid spacing. */}
        </motion.div>
        
      </div>
    </section>
  );
}
