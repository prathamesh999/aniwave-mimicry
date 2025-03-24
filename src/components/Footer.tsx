
import React from "react";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-24 px-6 md:px-12 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          <div>
            <a href="/" className="flex items-center gap-1 font-mono font-bold text-lg tracking-tighter mb-6">
              <span className="text-white">ani</span>
              <span className="text-white/80">wave</span>
            </a>
            <p className="text-white/60 max-w-xs text-sm">
              Premium anime-inspired t-shirts designed with passion for true fans.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-6 text-white tracking-tighter">Shop</h4>
            <ul className="space-y-3">
              {[
                "New Arrivals",
                "Bestsellers",
                "Limited Editions",
                "Size Guide",
                "Gift Cards"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm animated-underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-6 text-white tracking-tighter">Newsletter</h4>
            <p className="text-white/60 mb-4 text-sm">
              Subscribe to get 10% off your first order and updates on new designs.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-white/10 bg-black text-white flex-grow focus:outline-none focus:ring-1 focus:ring-white/30 transition-all text-sm"
              />
              <button
                type="submit"
                className="bg-white text-black px-3 py-2 font-mono text-xs uppercase tracking-wide transition-all hover:bg-white/90 flex items-center gap-1"
              >
                Subscribe
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <p className="text-white/40 text-xs mb-4 md:mb-0 font-mono">
            © {currentYear} Aniwave T-Shirts. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {["Instagram", "TikTok", "Twitter", "Facebook"].map((social) => (
              <a key={social} href="#" className="text-white/40 hover:text-white transition-colors text-xs font-mono">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
