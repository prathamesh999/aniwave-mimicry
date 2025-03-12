
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
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 backdrop-blur-md",
        scrolled ? "py-4 bg-white/80 shadow-sm" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className="text-primary">ani</span>
          <span className="text-primary/80">wave</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {["work", "about", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              className="text-sm uppercase tracking-wider font-medium animated-underline"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white flex flex-col items-center justify-center space-y-10 md:hidden transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100 z-40" : "opacity-0 -z-10"
        )}
      >
        {["work", "about", "contact"].map((item, i) => (
          <button
            key={item}
            onClick={() => handleNavClick(item)}
            className={cn(
              "text-xl uppercase tracking-wider font-medium animated-underline",
              isOpen ? `animate-fade-in delay-${i * 100}` : ""
            )}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
