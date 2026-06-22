"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { ExternalLink, Check } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

function ProjectCard({ project }: { project: any }) {
  const [imgIndex, setImgIndex] = useState(0);
  const images = 'images' in project && Array.isArray(project.images) ? project.images : [project.image];
  const currentImage = images[imgIndex];

  return (
    <div className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-colors flex flex-col">
      <div 
        className="relative h-48 w-full overflow-hidden bg-neutral-800 cursor-pointer"
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
          <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full pointer-events-none">
            {imgIndex + 1} / {images.length}
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-white">
            {project.title}
          </h3>
          {'price' in project && (
            <span className="text-emerald-400 font-bold whitespace-nowrap ml-4 bg-emerald-950/30 px-2 py-1 rounded">
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
                <Check className="w-4 h-4 text-emerald-500 mr-2 shrink-0 mt-0.5" />
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
              className="text-xs font-medium px-2.5 py-1 bg-neutral-800 text-neutral-300 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-4 mt-auto pt-4 border-t border-neutral-800">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            Code
          </a>
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors ml-auto"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
          Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
