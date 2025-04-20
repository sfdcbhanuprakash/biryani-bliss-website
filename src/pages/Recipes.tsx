
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Users } from "lucide-react";

const Recipes = () => {
  const allRecipes = [
    {
      id: "1",
      name: "Hyderabadi Chicken Biryani",
      time: "60 mins",
      level: "Intermediate",
      serves: "4",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "2",
      name: "Lucknowi Chicken Biryani",
      time: "90 mins",
      level: "Advanced",
      serves: "6",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "3",
      name: "Kolkata Biryani",
      time: "75 mins",
      level: "Intermediate",
      serves: "5",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "4",
      name: "Malabar Biryani",
      time: "70 mins",
      level: "Intermediate",
      serves: "4",
      image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "5",
      name: "Sindhi Biryani",
      time: "80 mins",
      level: "Advanced",
      serves: "5",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "6",
      name: "Quick 30-Minute Biryani",
      time: "30 mins",
      level: "Easy",
      serves: "2",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  return (
    <>
      <Helmet>
        <title>All Biryani Recipes - Biryani Bliss</title>
        <meta name="description" content="Explore our collection of authentic biryani recipes from various regions of India." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="py-10 bg-biryani-cream">
            <div className="biryani-container">
              <h1 className="text-4xl font-playfair font-bold text-biryani-charcoal mb-4">
                Authentic <span className="text-biryani-saffron">Biryani</span> Recipes
              </h1>
              <p className="text-gray-700 max-w-2xl">
                Explore our collection of authentic biryani recipes from various regions of India. 
                From royal Hyderabadi to subtle Lucknowi styles, discover your favorite biryani.
              </p>
            </div>
          </div>

          <div className="biryani-container py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allRecipes.map((recipe) => (
                <Link 
                  to={`/recipe/${recipe.id}`} 
                  key={recipe.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover-up group"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={recipe.image} 
                      alt={recipe.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="font-playfair text-xl font-semibold text-biryani-charcoal mb-3">
                      {recipe.name}
                    </h2>
                    <div className="flex gap-4 mb-4 text-sm text-gray-600">
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
                </Link>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Recipes;
