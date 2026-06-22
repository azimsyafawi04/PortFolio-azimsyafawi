"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { ExternalLink, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function ProjectCard({ project }: { project: any }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = 'images' in project && Array.isArray(project.images) ? project.images : [project.image];
  const currentImage = images[imgIndex];

  return (
    <Tilt
      className="h-full"
      glareEnable={true}
      glareMaxOpacity={0.45}
      glareColor="#00f5ff"
      glarePosition="all"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={1500}
      scale={1.02}
    >
      <div className="group glassmorphism rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-colors flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]">
        <div 
          className="relative h-48 w-full overflow-hidden bg-neutral-900 cursor-pointer"
          onClick={() => setImgIndex((imgIndex + 1) % images.length)}
        >
          {'video' in project && project.video ? (
            <video 
              src={project.video}
              poster={currentImage}
              loop
              muted
              playsInline
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => { e.currentTarget.pause(); e.currentTarget.currentTime = 0; }}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <img 
              src={currentImage} 
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          
          {images.length > 1 && (
            <div className="absolute bottom-2 right-2 bg-black/80 text-cyan-400 text-xs px-2 py-1 rounded-full pointer-events-none font-bold">
              {imgIndex + 1} / {images.length}
            </div>
          )}
        </div>
        
        <div className="p-6 flex flex-col flex-grow relative z-10">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-white group-hover:glow-text-cyan transition-all">
              {project.title}
            </h3>
            {'price' in project && (
              <span className="text-cyan-400 font-bold whitespace-nowrap ml-4 bg-cyan-950/40 px-2 py-1 rounded shadow-[0_0_10px_rgba(0,245,255,0.2)] border border-cyan-500/30">
                {project.price}
              </span>
            )}
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed mb-4">
            {project.description}
          </p>
          
          {'features' in project && Array.isArray(project.features) && (
            <ul className="mb-6 space-y-2 flex-grow">
              {project.features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start text-sm text-neutral-300">
                  <Check className="w-4 h-4 text-cyan-500 mr-2 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
          
          {!('features' in project) && <div className="flex-grow"></div>}
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag: string) => (
              <span 
                key={tag}
                className="text-xs font-bold px-2.5 py-1 glassmorphism-badge text-cyan-100 rounded-md shadow-[0_0_5px_rgba(0,245,255,0.1)] group-hover:shadow-[0_0_10px_rgba(0,245,255,0.4)] transition-shadow"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-800/50">
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-purple-300 hover:glow-text-purple transition-all"
            >
              <FaGithub className="w-4 h-4" />
              Code
            </a>
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 hover:glow-text-cyan transition-all ml-auto"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="min-h-[120vh] py-24 px-6 flex items-center relative z-10 pointer-events-none">
      <div className="max-w-5xl mx-auto w-full pointer-events-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold tracking-tight text-white mb-12 glow-text-cyan"
        >
          Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-container">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
