import { PORTFOLIO_DATA } from "@/lib/data";
import { Shield } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white hover:text-neutral-300 transition-colors">
          {PORTFOLIO_DATA.name}
          <Shield className="w-4 h-4 text-neutral-400" />
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
