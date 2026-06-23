"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/lib/data";
import { ExternalLink, Check, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";

function ProjectCard({ project, onOpenModal }: { project: any, onOpenModal: (project: any) => void }) {
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
            
            {project.liveUrl !== "#" ? (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 hover:glow-text-cyan transition-all ml-auto"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : (
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onOpenModal(project);
                }}
                className="flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 hover:glow-text-cyan transition-all ml-auto cursor-pointer relative z-50"
              >
                <ExternalLink className="w-4 h-4" />
                View Interface
              </button>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [modalImgIndex, setModalImgIndex] = useState(0);

  const activeImages = selectedProject ? ('images' in selectedProject && Array.isArray(selectedProject.images) ? selectedProject.images : [selectedProject.image]) : [];

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalImgIndex((modalImgIndex + 1) % activeImages.length);
  };

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalImgIndex((modalImgIndex - 1 + activeImages.length) % activeImages.length);
  };

  return (
    <>
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
                <ProjectCard project={project} onOpenModal={(p) => { setSelectedProject(p); setModalImgIndex(0); }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            key="interface-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 pointer-events-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col items-center justify-center bg-neutral-900 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(0,245,255,0.15)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent z-20">
                <h3 className="text-xl font-bold text-white ml-2 glow-text-cyan">{selectedProject.title} Interface</h3>
                <button 
                  className="bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors border border-white/10"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {activeImages.length > 1 && (
                <>
                  <button 
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-colors border border-white/10"
                    onClick={handlePrevImg}
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-3 transition-colors border border-white/10"
                    onClick={handleNextImg}
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>
                </>
              )}

              <div className="w-full h-[80vh] flex items-center justify-center p-4 pt-16 bg-black/40">
                {'video' in selectedProject && selectedProject.video && modalImgIndex === 0 ? (
                  <video 
                    src={selectedProject.video}
                    controls
                    autoPlay
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                ) : (
                  <img 
                    src={activeImages[modalImgIndex]} 
                    alt={selectedProject.title}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                )}
              </div>
              
              {activeImages.length > 1 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-cyan-400 px-4 py-2 rounded-full font-bold border border-cyan-500/30 shadow-[0_0_15px_rgba(0,245,255,0.2)]">
                  {modalImgIndex + 1} / {activeImages.length}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
