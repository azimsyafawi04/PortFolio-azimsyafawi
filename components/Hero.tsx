import { PORTFOLIO_DATA } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  // Assuming the user's description is a single string, we split it for better formatting if needed, 
  // or we can just apply a tighter max-width.
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
      <div className="max-w-4xl w-full flex flex-col items-start gap-4">
        
        <h2 className="text-neutral-500 font-medium tracking-widest uppercase text-sm mb-2">
          HELLO, I'M
        </h2>
        
        <h1 className="text-6xl sm:text-8xl font-bold tracking-tighter text-white">
          {PORTFOLIO_DATA.name}<span className="text-neutral-400">.</span>
        </h1>
        
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-400 mt-2">
          {PORTFOLIO_DATA.role}.
        </h2>
        
        <div className="text-xs sm:text-sm font-semibold tracking-widest text-neutral-600 uppercase mt-2 mb-4 border border-neutral-800 bg-neutral-900/50 px-3 py-1 rounded-full">
          FREELANCE WEB & MOBILE APP DEVELOPMENT
        </div>

        <p className="max-w-2xl text-neutral-400 text-lg sm:text-xl leading-relaxed">
          I am a second-year Computer System Security student at UniKL MIIT, working actively as a web and mobile app developer. <br/>
          I have a strong interest in security operations, penetration testing, and software engineering. <br/>
          I combine my coding skills with cybersecurity knowledge to build secure, functional, and high-performing digital solutions.
        </p>

        <div className="flex flex-col items-start gap-6 mt-8">
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-neutral-200 transition-colors"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-semibold border border-neutral-600 text-white hover:bg-neutral-800 transition-colors bg-black"
            >
              Discuss a Project
            </a>
          </div>
          
          <a 
            href="https://www.linkedin.com/in/azim-syafawi-0b249931a" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-300 transition-colors mt-2"
          >
            Or, Follow My LinkedIn <FaLinkedin className="w-4 h-4" />
          </a>
        </div>
        
      </div>
    </section>
  );
}
