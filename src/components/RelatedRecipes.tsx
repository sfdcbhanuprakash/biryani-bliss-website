
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecipeProps {
  id: number;
  name: string;
  image: string;
  time?: string;
  level?: string;
}

interface RelatedRecipesProps {
  recipes: RecipeProps[];
}

const RelatedRecipes: React.FC<RelatedRecipesProps> = ({ recipes }) => {
  if (!recipes.length) return null;

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-playfair font-bold mb-6">You May Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Link 
            to={`/recipe/${recipe.id}`} 
            key={recipe.id} 
            className="flex flex-col sm:flex-row md:flex-col hover-up group bg-white overflow-hidden rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="h-32 sm:w-1/3 md:w-full md:h-32 overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-3 sm:w-2/3 md:w-full">
              <h3 className="font-playfair text-base font-semibold text-biryani-charcoal mb-1 line-clamp-1">
                {recipe.name}
              </h3>
              {(recipe.time || recipe.level) && (
                <div className="flex gap-3 mb-2 text-xs text-gray-600">
                  {recipe.time && (
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{recipe.time}</span>
                    </div>
                  )}
                  {recipe.level && (
                    <div className="flex items-center gap-1">
                      <ChefHat size={12} />
                      <span>{recipe.level}</span>
                    </div>
                  )}
                </div>
              )}
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full border-biryani-saffron text-biryani-saffron hover:bg-biryani-saffron hover:text-white text-xs"
              >
                View Recipe
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RelatedRecipes;
