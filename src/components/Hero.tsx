
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToTypes = () => {
    document.getElementById('types')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
            filter: "brightness(0.6)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-biryani-charcoal/70 to-biryani-charcoal/40" />
      </div>

      {/* Floating Spice Elements (Decorative) */}
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/5 text-biryani-saffron text-4xl animate-float opacity-20">✦</div>
        <div className="absolute top-2/3 right-1/4 text-biryani-turmeric text-3xl animate-float opacity-30" style={{ animationDelay: "1s" }}>✻</div>
        <div className="absolute bottom-1/3 left-1/3 text-biryani-spice text-5xl animate-float opacity-20" style={{ animationDelay: "2s" }}>✤</div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-white mb-4 drop-shadow-lg">
          A Thousand Flavors. <br/>
          <span className="text-biryani-saffron">One Dish.</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Discover the perfect harmony of fragrant basmati rice, tender chicken, and aromatic spices that create the magical symphony known as Biryani.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-biryani-saffron hover:bg-biryani-spice text-white text-lg py-6 px-8">
            Explore Recipes
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
            Watch Preparation
          </Button>
        </div>
        
        {/* Scroll Down Indicator */}
        <button 
          onClick={scrollToTypes}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors flex flex-col items-center gap-2"
        >
          <span className="text-sm">Discover More</span>
          <ChevronDown className="animate-bounce" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
