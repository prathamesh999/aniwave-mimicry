
import React, { useEffect, useRef } from "react";
import { ArrowDown, ShoppingBag } from "lucide-react";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;
    
    const letters = title.textContent?.split("") || [];
    title.textContent = "";
    
    letters.forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      span.className = "inline-block opacity-0 animate-fade-in";
      title.appendChild(span);
    });
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-20 animate-float animation-delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 opacity-0 animate-slide-up animation-delay-300">
          <span className="bg-primary/5 text-primary/80 px-4 py-2 rounded-full text-sm font-medium">Premium Anime T-Shirts</span>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
        >
          Wear Your Favorite Anime
        </h1>
        
        <p className="text-xl md:text-2xl text-primary/80 max-w-2xl mx-auto mb-12 opacity-0 animate-slide-up animation-delay-600">
          High-quality t-shirts featuring exclusive anime designs, created by fans for fans.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 opacity-0 animate-slide-up animation-delay-900">
          <button 
            onClick={scrollToWork}
            className="rounded-md bg-primary text-white px-8 py-3 font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg flex items-center justify-center gap-2"
          >
            <ShoppingBag size={18} />
            Shop Collection
          </button>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-md bg-transparent border border-primary/20 px-8 py-3 font-medium transition-all hover:bg-primary/5"
          >
            Get in Touch
          </button>
        </div>
      </div>
      
      <div 
        onClick={scrollToWork}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce transition-opacity hover:opacity-70"
      >
        <ArrowDown size={24} className="opacity-40" />
      </div>
    </section>
  );
};

export default Hero;
