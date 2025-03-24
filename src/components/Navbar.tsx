
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12",
        scrolled ? "py-4 bg-black/90 backdrop-blur-md" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1 font-mono font-bold text-lg tracking-tighter">
          <span className="text-white">ani</span>
          <span className="text-white/80">wave</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {["products", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item === "products" ? "work" : item)}
              className="text-xs uppercase tracking-wider font-mono animated-underline text-white"
            >
              {item}
            </button>
          ))}
          <a 
            href="#work" 
            className="ml-4 text-xs uppercase bg-white text-black px-5 py-2 tracking-wide font-mono hover:bg-white/90 transition-colors"
          >
            Shop now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center text-white"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black flex flex-col items-center justify-center space-y-10 md:hidden transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
        )}
      >
        {["products", "about", "contact"].map((item, i) => (
          <button
            key={item}
            onClick={() => handleNavClick(item === "products" ? "work" : item)}
            className={cn(
              "text-xl uppercase tracking-tighter font-display animated-underline text-white",
              isOpen ? `animate-fade-in delay-${i * 100}` : ""
            )}
          >
            {item}
          </button>
        ))}
        <a 
          href="#work" 
          className="text-xs uppercase bg-white text-black px-5 py-2 tracking-wide font-mono hover:bg-white/90 transition-colors mt-6"
        >
          Shop now
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
