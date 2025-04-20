
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="biryani-container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-biryani-saffron text-2xl">✦</span>
          <span className="font-playfair font-bold text-xl md:text-2xl text-biryani-charcoal">
            Biryani <span className="text-biryani-saffron">Bliss</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <Button className="bg-biryani-saffron hover:bg-biryani-spice text-white">
            Cook Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-biryani-charcoal"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col gap-4">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
            <Button className="bg-biryani-saffron hover:bg-biryani-spice text-white w-full">
              Cook Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

// Separate component for nav links to avoid duplication
const NavLinks = ({ mobile = false, setIsMenuOpen = () => {} }) => {
  const links = [
    { name: "Home", href: "#" },
    { name: "Types", href: "#types" },
    { name: "Recipes", href: "#recipes" },
    { name: "History", href: "#history" },
    { name: "Blog", href: "#blog" },
  ];
  
  return links.map((link) => (
    <a
      key={link.name}
      href={link.href}
      className={`
        ${mobile ? 'py-2 border-b border-gray-100' : ''} 
        font-medium hover:text-biryani-saffron transition-colors
      `}
      onClick={() => mobile && setIsMenuOpen(false)}
    >
      {link.name}
    </a>
  ));
};

export default Navbar;
