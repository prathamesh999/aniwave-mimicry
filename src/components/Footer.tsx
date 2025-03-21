
import React from "react";
import { ShoppingBag, Shirt, Tag, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <a href="/" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
              <span className="text-primary">ani</span>
              <span className="text-primary/80">wave</span>
            </a>
            <p className="text-primary/70 max-w-xs">
              Premium anime-inspired t-shirts designed with passion for true fans.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              {[
                { name: "New Arrivals", icon: <Tag size={14} /> },
                { name: "Bestsellers", icon: <Heart size={14} /> },
                { name: "Limited Editions", icon: <Shirt size={14} /> },
                { name: "Size Guide", icon: <ShoppingBag size={14} /> },
                { name: "Gift Cards", icon: <ShoppingBag size={14} /> }
              ].map((item) => (
                <li key={item.name}>
                  <a href="#" className="text-primary/70 hover:text-primary transition-colors animated-underline flex items-center gap-2">
                    {item.icon}
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-lg mb-4">Newsletter</h4>
            <p className="text-primary/70 mb-4">
              Subscribe to get 10% off your first order and updates on new designs.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md border border-primary/10 flex-grow focus:outline-none focus:ring-1 focus:ring-primary transition-all"
              />
              <button
                type="submit"
                className="rounded-md bg-primary text-white px-4 py-2 font-medium transition-all hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary/5">
          <p className="text-primary/60 text-sm mb-4 md:mb-0">
            © {currentYear} Aniwave T-Shirts. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {["Instagram", "TikTok", "Twitter", "Facebook"].map((social) => (
              <a key={social} href="#" className="text-primary/60 hover:text-primary transition-colors text-sm">
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
