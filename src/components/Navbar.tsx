
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Search } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

interface NavLinksProps {
  mobile?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="biryani-container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-biryani-saffron text-2xl">✦</span>
          <span className="font-playfair font-bold text-xl md:text-2xl text-biryani-charcoal">
            Biryani <span className="text-biryani-saffron">Bliss</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLinks />
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search size={20} className="text-biryani-charcoal" />
            </button>
            <Button className="bg-biryani-saffron hover:bg-biryani-spice text-white">
              Cook Now
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Search"
          >
            <Search size={20} className="text-biryani-charcoal" />
          </button>
          <button 
            className="text-biryani-charcoal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Panel */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-4 animate-fade-in">
          <div className="biryani-container">
            <div className="relative">
              <input
                type="text"
                placeholder="Search recipes, tips, history..."
                className="w-full p-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-biryani-saffron focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="mt-2 text-sm text-gray-500">
              Try searching: "hyderabadi biryani", "spices", "cooking tips"
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in">
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
const NavLinks: React.FC<NavLinksProps> = ({ mobile = false, setIsMenuOpen }) => {
  const location = useLocation();
  const links = [
    { name: "Home", href: "/" },
    { name: "Types", href: "/#types" },
    { name: "Recipes", href: "/recipes" },
    { name: "History", href: "/#history" },
    { name: "Blog", href: "/blogs" },
  ];
  
  return links.map((link) => {
    const isActive = location.pathname === link.href || 
                    (link.href.includes('#') && location.pathname === '/' && location.hash === link.href.substring(1));
    
    return (
      <Link
        key={link.name}
        to={link.href}
        className={`
          ${mobile ? 'py-3 border-b border-gray-100' : ''} 
          ${isActive ? 'text-biryani-saffron font-semibold' : 'text-biryani-charcoal'}
          font-medium hover:text-biryani-saffron transition-colors relative
        `}
        onClick={() => mobile && setIsMenuOpen && setIsMenuOpen(false)}
      >
        {link.name}
        {isActive && !mobile && (
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-biryani-saffron"></span>
        )}
      </Link>
    );
  });
};

export default Navbar;
