
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    // Add letter-by-letter animation for the heading
    const heading = headingRef.current;
    if (!heading) return;
    
    const text = heading.textContent || "";
    heading.innerHTML = "";
    
    const words = text.split(" ");
    
    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "inline-block mr-4";
      
      const letters = word.split("");
      
      letters.forEach((letter, i) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${(wordIndex * 0.2) + (i * 0.05)}s`;
        span.className = "inline-block opacity-0 animate-fade-in";
        wordSpan.appendChild(span);
      });
      
      heading.appendChild(wordSpan);
    });
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById("work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden grain">
      {/* Marquee line at top */}
      <div className="absolute top-32 left-0 w-full overflow-hidden border-t border-b border-white/10 py-2">
        <div className="flex space-x-4 animate-marquee whitespace-nowrap">
          {Array(10).fill("PREMIUM ANIME COLLECTION").map((text, index) => (
            <span key={index} className="text-xs font-mono uppercase tracking-widest text-white/40 mx-4">
              {text}
            </span>
          ))}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 opacity-0 animate-slide-up animation-delay-300">
          <span className="bg-white text-black px-3 py-1 text-xs font-mono uppercase tracking-wide">Limited Edition</span>
        </div>
        
        <h1 
          ref={headingRef}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-none tracking-tighter"
        >
          Wear Your Favorite Anime
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light opacity-0 animate-slide-up animation-delay-600">
          High-quality t-shirts featuring exclusive anime designs, created by fans for fans.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 opacity-0 animate-slide-up animation-delay-900">
          <button 
            onClick={scrollToWork}
            className="bg-white text-black px-8 py-3 font-mono uppercase text-sm tracking-wide transition-all hover:bg-white/90"
          >
            Shop Collection
          </button>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="border border-white/20 px-8 py-3 font-mono uppercase text-sm tracking-wide transition-all hover:bg-white/5"
          >
            Contact Us
          </button>
        </div>
      </div>
      
      <div 
        onClick={scrollToWork}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-pulse transition-opacity hover:opacity-70"
      >
        <ArrowDown size={24} className="opacity-40" />
      </div>
    </section>
  );
};

export default Hero;
