import { PORTFOLIO_DATA } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-neutral-950">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
          About Me
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-neutral-400 text-lg leading-relaxed whitespace-pre-wrap">
              {PORTFOLIO_DATA.about}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Skills</h3>
            <div className="flex flex-wrap gap-3 mb-12">
              {PORTFOLIO_DATA.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-medium text-neutral-300 hover:border-neutral-600 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold text-white mb-6">Certifications & Achievements</h3>
            <div className="flex flex-col gap-3">
              {PORTFOLIO_DATA.certifications?.map((cert) => (
                <div 
                  key={cert}
                  className="px-5 py-4 bg-neutral-900 border border-neutral-800 rounded-xl text-sm font-medium text-neutral-300 hover:border-neutral-600 transition-colors"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
