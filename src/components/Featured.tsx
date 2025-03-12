
import React from "react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Akira Resurgence",
    description: "A modern reimagining of the classic cyberpunk anime with interactive storytelling elements.",
    category: "Interactive Experience",
    image: "https://images.unsplash.com/photo-1569701813229-33284b643e3c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Studio Ghibli Collection",
    description: "An immersive gallery showcasing the enchanting worlds created by Studio Ghibli.",
    category: "Digital Gallery",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Neo Tokyo Explorer",
    description: "A virtual reality experience that lets users explore the iconic cityscapes of anime.",
    category: "VR Experience",
    image: "https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Anime Soundscapes",
    description: "An audio-visual journey through the emotional landscapes of anime soundtracks.",
    category: "Audio Experience",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop",
  },
];

const Featured = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <span className="text-sm uppercase tracking-widest text-primary/60 font-medium mb-3 block">Featured Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Our Latest Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={cn(
                "group relative reveal", 
                index % 2 === 0 ? "stagger-1" : "stagger-3"
              )}
            >
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[4/3]">
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              
              <div className="relative">
                <span className="text-xs uppercase tracking-wider text-primary/60 font-medium mb-2 block">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-primary/80 mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium animated-underline"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
