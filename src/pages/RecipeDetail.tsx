
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock, Users, ChefHat } from "lucide-react";

const RecipeDetail = () => {
  const { id } = useParams();

  // For now, we'll use mock data. Later, this should come from an API or database
  const recipe = {
    id: "1",
    name: "Hyderabadi Chicken Biryani",
    description: "Known for its robust flavor, aromatic spices, and tender meat. The key is the 'dum' cooking method.",
    origin: "Hyderabad, India",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    preparationTime: "30 mins",
    cookingTime: "60 mins",
    servings: 4,
    difficulty: "Intermediate",
    ingredients: [
      "500g basmati rice",
      "750g chicken",
      "2 onions",
      "4 tomatoes",
      "2 tbsp ginger-garlic paste",
      "4 green chilies",
      "1/2 cup mint leaves",
      "1/2 cup coriander leaves",
    ],
    instructions: [
      "Marinate the chicken with yogurt and spices for at least 2 hours.",
      "Par-boil the basmati rice with whole spices until 70% cooked.",
      "In a heavy-bottomed pot, layer the marinated chicken and partially cooked rice.",
      "Drizzle with saffron milk, fried onions, and ghee.",
      "Seal the pot with dough and cook on low heat for 25-30 minutes.",
      "Let it rest for 10 minutes before opening and serving.",
    ],
  };

  return (
    <>
      <Helmet>
        <title>{recipe.name} Recipe - Biryani Bliss</title>
        <meta name="description" content={recipe.description} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="relative h-[50vh] overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="biryani-container py-8">
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                  {recipe.name}
                </h1>
                <p className="text-white/90 text-lg max-w-2xl mb-6">
                  {recipe.description}
                </p>
                <div className="flex flex-wrap gap-6 text-white">
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>Prep: {recipe.preparationTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>Cook: {recipe.cookingTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>Serves: {recipe.servings}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat size={20} />
                    <span>Difficulty: {recipe.difficulty}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="biryani-container py-12">
            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <section className="mb-8">
                  <h2 className="text-2xl font-playfair font-bold mb-4">Instructions</h2>
                  <ol className="space-y-4">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="flex gap-4">
                        <span className="font-bold text-biryani-saffron">{index + 1}.</span>
                        <p>{step}</p>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>

              <div>
                <section className="bg-biryani-cream p-6 rounded-lg sticky top-4">
                  <h2 className="text-xl font-playfair font-bold mb-4">Ingredients</h2>
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-biryani-saffron rounded-full"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default RecipeDetail;
