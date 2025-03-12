
import React from "react";
import { Shirt, Star, Heart, Award } from "lucide-react";

const About = () => {
  const stats = [
    { number: "5+", label: "Years in Business", icon: <Award size={20} className="text-primary/60" /> },
    { number: "500+", label: "T-Shirts Sold", icon: <Shirt size={20} className="text-primary/60" /> },
    { number: "50+", label: "Unique Designs", icon: <Heart size={20} className="text-primary/60" /> },
    { number: "4.9", label: "Customer Rating", icon: <Star size={20} className="text-primary/60" /> },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal stagger-1">
            <span className="text-sm uppercase tracking-widest text-primary/60 font-medium mb-3 block">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">We bring anime fashion to life</h2>
            
            <p className="text-primary/80 mb-6 leading-relaxed">
              Aniwave is a premium t-shirt brand created by anime enthusiasts for anime enthusiasts. We design and produce high-quality, comfortable t-shirts featuring exclusive anime-inspired artwork that you won't find anywhere else.
            </p>
            
            <p className="text-primary/80 mb-8 leading-relaxed">
              Our team of designers and anime fans work together to create wearable art that captures the essence of anime culture, from classic series to modern favorites. Each design is carefully crafted with attention to detail and printed on premium cotton t-shirts.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="reveal stagger-2">
                  <div className="flex items-center gap-2 mb-1">
                    {stat.icon}
                    <span className="block text-3xl md:text-4xl font-bold">{stat.number}</span>
                  </div>
                  <span className="text-sm text-primary/60">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 reveal stagger-3">
            <div className="space-y-4">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-square">
                <img 
                  src="/lovable-uploads/ce7dae93-29c8-4249-bb08-991d329b832f.png" 
                  alt="T-shirt with lip design" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=600&auto=format&fit=crop" 
                  alt="T-shirt printing" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1636955816868-fcb881e57954?q=80&w=600&auto=format&fit=crop" 
                  alt="T-shirt design artwork" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=600&auto=format&fit=crop" 
                  alt="Finished t-shirt product" 
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
