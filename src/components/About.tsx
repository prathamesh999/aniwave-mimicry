
import React from "react";

const About = () => {
  const stats = [
    { number: "8+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "20+", label: "Happy Clients" },
    { number: "5", label: "Industry Awards" },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal stagger-1">
            <span className="text-sm uppercase tracking-widest text-primary/60 font-medium mb-3 block">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">We blend creativity with technique</h2>
            
            <p className="text-primary/80 mb-6 leading-relaxed">
              Aniwave is a creative studio specializing in bringing anime-inspired digital experiences to life. We combine artistic vision with technical expertise to create immersive projects that resonate with audiences worldwide.
            </p>
            
            <p className="text-primary/80 mb-8 leading-relaxed">
              Our team of designers, developers, and anime enthusiasts work together to push the boundaries of digital storytelling and create unforgettable experiences that capture the essence of anime culture.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="reveal stagger-2">
                  <span className="block text-3xl md:text-4xl font-bold mb-1">{stat.number}</span>
                  <span className="text-sm text-primary/60">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 reveal stagger-3">
            <div className="space-y-4">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=600&auto=format&fit=crop" 
                  alt="Team at work" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=600&auto=format&fit=crop" 
                  alt="Creative process" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1636955816868-fcb881e57954?q=80&w=600&auto=format&fit=crop" 
                  alt="Digital artwork" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=600&auto=format&fit=crop" 
                  alt="Animation process" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
