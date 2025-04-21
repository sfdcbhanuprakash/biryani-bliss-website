
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Users, Search } from "lucide-react";
import Footer from '@/components/Footer';

const Recipes = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);
  
  const allRecipes = [
    {
      id: "1",
      name: "Hyderabadi Chicken Biryani",
      time: "60 mins",
      level: "Intermediate",
      serves: "4",
      category: "chicken",
      region: "south",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "2",
      name: "Lucknowi Chicken Biryani",
      time: "90 mins",
      level: "Advanced",
      serves: "6",
      category: "chicken",
      region: "north",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "3",
      name: "Kolkata Biryani",
      time: "75 mins",
      level: "Intermediate",
      serves: "5",
      category: "chicken",
      region: "east",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "4",
      name: "Malabar Biryani",
      time: "70 mins",
      level: "Intermediate",
      serves: "4",
      category: "seafood",
      region: "south",
      image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "5",
      name: "Sindhi Biryani",
      time: "80 mins",
      level: "Advanced",
      serves: "5",
      category: "meat",
      region: "north",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "6",
      name: "Quick 30-Minute Biryani",
      time: "30 mins",
      level: "Easy",
      serves: "2",
      category: "vegetarian",
      region: "fusion",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "7",
      name: "Vegetable Biryani",
      time: "50 mins",
      level: "Easy",
      serves: "4",
      category: "vegetarian",
      region: "fusion",
      image: "https://images.unsplash.com/photo-1631515242808-497c3d4a88cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "8",
      name: "Prawn Biryani",
      time: "45 mins",
      level: "Intermediate",
      serves: "3",
      category: "seafood",
      region: "coastal",
      image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "9",
      name: "Mughlai Biryani",
      time: "100 mins",
      level: "Advanced",
      serves: "8",
      category: "meat",
      region: "north",
      image: "https://images.unsplash.com/photo-1633945274565-5f4bea20e266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  useEffect(() => {
    // Filter recipes based on activeFilter and searchQuery
    let results = [...allRecipes];
    
    // Apply category filter
    if (activeFilter !== "all") {
      results = results.filter(recipe => 
        recipe.category === activeFilter || recipe.region === activeFilter
      );
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(recipe => 
        recipe.name.toLowerCase().includes(query) || 
        recipe.level.toLowerCase().includes(query)
      );
    }
    
    setFilteredRecipes(results);
  }, [activeFilter, searchQuery]);

  // Animation delay for grid items
  const getAnimationDelay = (index: number) => {
    return `${(index % 3) * 100}ms`;
  };

  return (
    <>
      <Helmet>
        <title>All Biryani Recipes - Biryani Bliss</title>
        <meta name="description" content="Explore our collection of authentic biryani recipes from various regions of India." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="py-8 bg-biryani-cream">
            <div className="biryani-container">
              <h1 className="text-4xl font-playfair font-bold text-biryani-charcoal mb-4">
                Authentic <span className="text-biryani-saffron">Biryani</span> Recipes
              </h1>
              <p className="text-gray-700 max-w-2xl mb-6">
                Explore our collection of authentic biryani recipes from various regions of India. 
                From royal Hyderabadi to subtle Lucknowi styles, discover your favorite biryani.
              </p>
              
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search recipes by name or difficulty..."
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-biryani-saffron focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={activeFilter === "all" ? "default" : "outline"}
                  className={activeFilter === "all" ? "bg-biryani-saffron text-white" : ""}
                  onClick={() => setActiveFilter("all")}
                >
                  All
                </Button>
                <Button
                  variant={activeFilter === "chicken" ? "default" : "outline"}
                  className={activeFilter === "chicken" ? "bg-biryani-saffron text-white" : ""}
                  onClick={() => setActiveFilter("chicken")}
                >
                  Chicken
                </Button>
                <Button
                  variant={activeFilter === "meat" ? "default" : "outline"}
                  className={activeFilter === "meat" ? "bg-biryani-saffron text-white" : ""}
                  onClick={() => setActiveFilter("meat")}
                >
                  Meat
                </Button>
                <Button
                  variant={activeFilter === "vegetarian" ? "default" : "outline"}
                  className={activeFilter === "vegetarian" ? "bg-biryani-saffron text-white" : ""}
                  onClick={() => setActiveFilter("vegetarian")}
                >
                  Vegetarian
                </Button>
                <Button
                  variant={activeFilter === "seafood" ? "default" : "outline"}
                  className={activeFilter === "seafood" ? "bg-biryani-saffron text-white" : ""}
                  onClick={() => setActiveFilter("seafood")}
                >
                  Seafood
                </Button>
                <Button
                  variant={activeFilter === "north" ? "default" : "outline"}
                  className={activeFilter === "north" ? "bg-biryani-saffron text-white" : ""}
                  onClick={() => setActiveFilter("north")}
                >
                  North Indian
                </Button>
                <Button
                  variant={activeFilter === "south" ? "default" : "outline"}
                  className={activeFilter === "south" ? "bg-biryani-saffron text-white" : ""}
                  onClick={() => setActiveFilter("south")}
                >
                  South Indian
                </Button>
              </div>
            </div>
          </div>

          <div className="biryani-container py-16">
            {filteredRecipes.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-playfair mb-4">No recipes found</h2>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <Button 
                  onClick={() => {
                    setActiveFilter("all");
                    setSearchQuery("");
                  }}
                  className="bg-biryani-saffron hover:bg-biryani-spice text-white"
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredRecipes.map((recipe, index) => (
                  <Link 
                    to={`/recipe/${recipe.id}`} 
                    key={recipe.id} 
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover-up group animate-fade-in"
                    style={{ animationDelay: getAnimationDelay(index) }}
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
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-600">
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
            )}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Recipes;
