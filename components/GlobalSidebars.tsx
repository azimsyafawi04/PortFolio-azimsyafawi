import { PORTFOLIO_DATA } from "@/lib/data";

export default function GlobalSidebars() {
  return (
    <>
      {/* Left Sidebar - Social Icons */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-50">
        <div className="flex flex-col gap-6">
          {PORTFOLIO_DATA.contact.socials.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-white transition-all hover:-translate-y-1 transform duration-300"
              title={social.name}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        {/* Vertical line connector */}
        <div className="w-px h-24 bg-neutral-800 mt-2"></div>
      </div>

      {/* Right Sidebar - Copyright */}
      <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center z-50">
        <div 
          className="text-neutral-500 text-xs font-medium tracking-widest uppercase hover:text-white transition-colors cursor-default"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          © 2026 Azim Syafawi
        </div>
        {/* Vertical line connector */}
        <div className="w-px h-24 bg-neutral-800 mt-6"></div>
      </div>
    </>
  );
}
