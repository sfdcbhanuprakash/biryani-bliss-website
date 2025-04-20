
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Users } from "lucide-react";

const RecipeSection = () => {
  return (
    <section id="recipes" className="py-20 bg-white">
      <div className="biryani-container">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-biryani-charcoal mb-4">
            Authentic <span className="text-biryani-saffron">Biryani</span> Recipes
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Master the art of creating the perfect chicken biryani with our chef-curated recipes. 
            From traditional methods to modern adaptations, find your perfect biryani style.
          </p>
        </div>

        {/* Featured Recipe */}
        <div className="bg-biryani-cream rounded-lg overflow-hidden shadow-lg mb-12">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 h-64 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1633945274565-5f4bea20e266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Classic Hyderabadi Chicken Biryani" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-biryani-spice rounded-full">
                  Featured Recipe
                </span>
              </div>
              <h3 className="text-2xl font-bold text-biryani-charcoal mb-4">
                Classic Hyderabadi Chicken Biryani
              </h3>
              <div className="flex gap-4 mb-4 text-gray-600">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>60 mins</span>
                </div>
                <div className="flex items-center gap-1">
                  <ChefHat size={16} />
                  <span>Intermediate</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>Serves 4</span>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Learn the authentic dum method of preparing aromatic Hyderabadi Biryani with 
                tender chicken pieces, fragrant long-grain basmati rice, and a blend of 
                traditional spices to create a dish fit for royalty.
              </p>
              <Button className="bg-biryani-saffron hover:bg-biryani-spice text-white self-start">
                View Full Recipe
              </Button>
            </div>
          </div>
        </div>

        {/* Recipe Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Kolkata Style Chicken Biryani",
              time: "75 mins",
              level: "Intermediate",
              serves: "5",
              image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
              name: "Lucknowi Chicken Biryani",
              time: "90 mins",
              level: "Advanced",
              serves: "6",
              image: "https://images.unsplash.com/photo-1631515242808-497c3d4a88cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
              name: "Quick 30-Minute Biryani",
              time: "30 mins",
              level: "Easy",
              serves: "2",
              image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          ].map((recipe, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover-up group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h4 className="font-playfair text-xl font-semibold text-biryani-charcoal mb-2">
                  {recipe.name}
                </h4>
                <div className="flex gap-3 mb-3 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChefHat size={14} />
                    <span>{recipe.level}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    <span>Serves {recipe.serves}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-biryani-saffron text-biryani-saffron hover:bg-biryani-saffron hover:text-white">
                  View Recipe
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-biryani-spice font-medium">
            Browse All Recipes &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecipeSection;
