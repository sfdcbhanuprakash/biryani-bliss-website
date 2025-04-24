
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'sonner';
import { 
  Clock, Users, ChefHat, Share2, Star, 
  ArrowLeft, ArrowRight, MessageSquare, ThumbsUp 
} from "lucide-react";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import RelatedRecipes from '@/components/RelatedRecipes';

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const recipeId = parseInt(id || "1");
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState('');

  const allRecipes = [
    // All recipes data - in a real app this would come from an API or database
    {
      id: 1,
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
      tips: [
        "Use high-quality long-grain basmati rice for best results.",
        "Don't skip the marination time, it's crucial for flavor development.",
        "The 'dum' cooking method requires a tight seal - use dough if possible.",
        "Let the biryani rest before serving to allow flavors to meld."
      ]
    },
    {
      id: 2,
      name: "Lucknowi Chicken Biryani",
      description: "Known for its delicate flavors and melt-in-mouth textures. The 'dum pukht' style creates a gentle, aromatic dish.",
      origin: "Lucknow, India",
      image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      preparationTime: "40 mins",
      cookingTime: "90 mins",
      servings: 6,
      difficulty: "Advanced",
      ingredients: [
        "600g basmati rice",
        "800g chicken",
        "3 large onions, thinly sliced",
        "2 tbsp ginger-garlic paste",
        "1/2 cup yogurt",
        "1 tsp saffron strands",
        "1/2 cup warm milk",
        "4 tbsp ghee",
      ],
      instructions: [
        "Gently fry sliced onions until golden brown. Set aside half for garnish.",
        "Marinate chicken with yogurt, half of the fried onions, and spices for 3 hours.",
        "Parboil rice with whole spices until 70% cooked. Drain and set aside.",
        "In a heavy-bottomed pot, place the marinated chicken.",
        "Layer the partially cooked rice over the chicken.",
        "Pour saffron milk and ghee over the rice.",
        "Cover with a tight lid and seal with dough if possible.",
        "Cook on very low heat for 45 minutes.",
        "Let it rest for 10 minutes before serving. Garnish with remaining fried onions."
      ],
      tips: [
        "The key to Lucknowi biryani is subtle flavoring - don't overdo the spices.",
        "Use only the best quality, aged basmati rice.",
        "Cook on very low heat for a long time to achieve the perfect texture.",
        "Adding rose water gives an authentic Awadhi touch to this biryani."
      ]
    },
    {
      id: 3,
      name: "Kolkata Biryani",
      description: "Distinguished by the addition of potatoes and a subtle use of spices. Less heat, more aroma.",
      origin: "Kolkata, India",
      image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      preparationTime: "35 mins",
      cookingTime: "75 mins",
      servings: 5,
      difficulty: "Intermediate",
      ingredients: [
        "500g basmati rice",
        "600g chicken",
        "300g potatoes, cut into large chunks",
        "2 large onions, sliced",
        "2 tbsp ginger-garlic paste",
        "4 boiled eggs (optional)",
        "Kewra water",
        "Saffron strands soaked in milk",
      ],
      instructions: [
        "Lightly fry potato chunks until golden but not fully cooked. Set aside.",
        "Marinate chicken with yogurt and spices for at least 2 hours.",
        "Parboil rice with whole spices until 70% cooked.",
        "In a heavy pot, layer marinated chicken, potatoes, and rice.",
        "Drizzle with saffron milk and kewra water.",
        "Cook on low heat for 30-40 minutes with a tight-fitting lid.",
        "Garnish with boiled eggs, fried onions, and mint leaves before serving."
      ],
      tips: [
        "The potatoes should be lightly fried before adding to absorb flavors better.",
        "Kewra water (screwpine essence) gives Kolkata biryani its distinctive aroma.",
        "This biryani typically uses fewer chili spices than other versions.",
        "Adding boiled eggs is traditional in authentic Kolkata biryani."
      ]
    },
    {
      id: 4,
      name: "Malabar Biryani",
      description: "A coastal delight with a distinctive flavor profile using short-grain rice and South Indian spices.",
      origin: "Kerala, India",
      image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      preparationTime: "30 mins",
      cookingTime: "70 mins",
      servings: 4,
      difficulty: "Intermediate",
      ingredients: [
        "500g Kaima/Jeerakasala rice",
        "700g chicken",
        "3 onions, thinly sliced",
        "2 tomatoes, chopped",
        "1 cup coconut milk",
        "Curry leaves",
        "Green chilies",
        "3 tbsp ghee",
      ],
      instructions: [
        "Wash and soak the Kaima rice for 30 minutes.",
        "Marinate chicken with yogurt, spices, and a touch of coconut milk.",
        "Fry thinly sliced onions until golden brown. Set aside half for garnish.",
        "Cook the marinated chicken with remaining onions until half done.",
        "Parboil the rice separately with spices until 70% cooked.",
        "Layer the rice over the chicken mixture.",
        "Pour remaining coconut milk over the rice.",
        "Cook on low heat with a sealed lid for 20-25 minutes."
      ],
      tips: [
        "Using Kaima or Jeerakasala rice is essential for authentic Malabar biryani.",
        "The addition of coconut milk gives this biryani its unique flavor profile.",
        "Fresh curry leaves add an essential South Indian touch to this dish.",
        "This biryani pairs perfectly with raita made with cucumber and mint."
      ]
    },
    {
      id: 5,
      name: "Sindhi Biryani",
      description: "Known for its spicy, tangy flavor profile with a distinctive sour taste from yogurt and green chilies.",
      origin: "Sindh, Pakistan",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      preparationTime: "40 mins",
      cookingTime: "80 mins",
      servings: 5,
      difficulty: "Advanced",
      ingredients: [
        "500g basmati rice",
        "700g chicken",
        "3 potatoes, cubed",
        "3 tomatoes",
        "4 green chilies",
        "1 cup yogurt",
        "Mint and coriander leaves",
        "Prunes or dried plums (optional)",
      ],
      instructions: [
        "Marinate chicken with yogurt, spices, and finely chopped green chilies for 2 hours.",
        "Par-fry the potato cubes and set aside.",
        "Parboil rice with whole spices until 70% cooked.",
        "Cook the marinated chicken until half done.",
        "Add fried potatoes to the chicken and cook for a few more minutes.",
        "Layer the rice over the chicken and potato mixture.",
        "Sprinkle chopped mint, coriander, and prunes between layers.",
        "Seal the pot with dough or foil and cook on low heat for 25-30 minutes."
      ],
      tips: [
        "Using prunes or dried plums adds a traditional sweet contrast to the spicy biryani.",
        "Sindhi biryani is typically spicier than other variations - adjust to taste.",
        "The sour note from yogurt and green chilies is a distinctive feature.",
        "Adding potatoes is traditional and helps absorb the flavorful gravy."
      ]
    },
    {
      id: 6,
      name: "Quick 30-Minute Biryani",
      description: "A simplified, quick version that doesn't compromise on flavor. Perfect for weeknight dinners.",
      origin: "Modern adaptation",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      preparationTime: "10 mins",
      cookingTime: "30 mins",
      servings: 2,
      difficulty: "Easy",
      ingredients: [
        "300g basmati rice",
        "300g boneless chicken, cut into small pieces",
        "1 onion, finely chopped",
        "1 tomato, chopped",
        "2 tbsp biryani masala",
        "1 tbsp ginger-garlic paste",
        "2 tbsp oil or ghee",
        "Handful of mint and coriander leaves",
      ],
      instructions: [
        "Wash and soak rice for 15 minutes while preparing other ingredients.",
        "In a pressure cooker or instant pot, sauté onions until golden.",
        "Add ginger-garlic paste and sauté for a minute.",
        "Add chicken pieces and brown them for 2-3 minutes.",
        "Add chopped tomatoes, biryani masala, and salt. Cook for 2 minutes.",
        "Drain the rice and add to the pot. Mix gently.",
        "Add 1.5 cups of water for every cup of rice used.",
        "Pressure cook for 1 whistle or use the rice setting on the instant pot.",
        "Let pressure release naturally for 5 minutes, then quick release.",
        "Fluff with a fork and garnish with fresh herbs before serving."
      ],
      tips: [
        "Using store-bought biryani masala saves time without compromising flavor.",
        "Cutting chicken into smaller pieces ensures it cooks quickly and evenly.",
        "A pressure cooker or instant pot is essential for this quick version.",
        "Let the biryani rest after cooking for better flavor infusion."
      ]
    }
  ];

  const recipe = allRecipes.find(r => r.id === recipeId) || allRecipes[0];
  
  const prevRecipe = allRecipes.find(r => r.id === recipeId - 1);
  const nextRecipe = allRecipes.find(r => r.id === recipeId + 1);

  const relatedRecipes = allRecipes
    .filter(r => r.id !== recipeId)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: recipe.name,
        text: `Check out this amazing ${recipe.name} recipe!`,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  const handleRate = (newRating: number) => {
    setRating(newRating);
    setIsRated(true);
    toast.success(`You rated this recipe ${newRating} stars!`);
  };

  const handleComment = () => {
    if (comment.trim()) {
      toast.success("Comment submitted successfully!");
      setComment('');
      setShowCommentInput(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [recipeId]);

  return (
    <>
      <Helmet>
        <title>{`${recipe.name} Recipe - Authentic Indian Biryani | Biryani Bliss`}</title>
        <meta name="description" content={`Learn how to make authentic ${recipe.name.toLowerCase()} with our step-by-step recipe. ${recipe.description}`} />
        <meta property="og:title" content={`${recipe.name} Recipe - Biryani Bliss`} />
        <meta property="og:description" content={recipe.description} />
        <meta property="og:image" content={recipe.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={window.location.href} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Recipe",
            "name": recipe.name,
            "image": recipe.image,
            "description": recipe.description,
            "author": {
              "@type": "Organization",
              "name": "Biryani Bliss"
            },
            "datePublished": "2024-04-24",
            "prepTime": `PT${recipe.preparationTime.split(" ")[0]}M`,
            "cookTime": `PT${recipe.cookingTime.split(" ")[0]}M`,
            "totalTime": `PT${parseInt(recipe.preparationTime) + parseInt(recipe.cookingTime)}M`,
            "recipeYield": `${recipe.servings} servings`,
            "recipeCategory": "Main Course",
            "recipeCuisine": "Indian",
            "recipeIngredient": recipe.ingredients,
            "recipeInstructions": recipe.instructions.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "text": step
            }))
          })}
        </script>
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="relative h-[50vh] overflow-hidden">
            <img 
              src={recipe.image} 
              alt={`${recipe.name} - Traditional ${recipe.origin} style biryani dish`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="biryani-container py-8">
                <div className="flex items-center text-white/80 mb-2">
                  <span className="text-biryani-saffron">Origin:</span>
                  <span className="ml-2">{recipe.origin}</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4 animate-fade-in">
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
            <div className="flex justify-between mb-8">
              <div className="flex space-x-2">
                {prevRecipe && (
                  <Button 
                    variant="outline" 
                    onClick={() => navigate(`/recipe/${prevRecipe.id}`)}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft size={16} />
                    <span className="hidden sm:inline">Previous Recipe</span>
                  </Button>
                )}
              </div>
              <div className="flex space-x-2">
                {nextRecipe && (
                  <Button 
                    variant="outline" 
                    onClick={() => navigate(`/recipe/${nextRecipe.id}`)}
                    className="flex items-center gap-2"
                  >
                    <span className="hidden sm:inline">Next Recipe</span>
                    <ArrowRight size={16} />
                  </Button>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-[2fr,1fr] gap-8">
              <div>
                <section className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover-up transition-all duration-300">
                  <h2 className="text-2xl font-playfair font-bold mb-6 pb-2 border-b border-gray-100">Step-by-Step Instructions</h2>
                  <ol className="space-y-6">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="flex gap-4 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                        <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-biryani-saffron/10 text-biryani-saffron font-semibold">{index + 1}</span>
                        <p>{step}</p>
                      </li>
                    ))}
                  </ol>
                </section>

                {recipe.tips && (
                  <section className="mb-8 bg-biryani-cream p-6 rounded-lg shadow-sm border border-gray-100">
                    <h2 className="text-2xl font-playfair font-bold mb-4">Chef's Tips</h2>
                    <ul className="space-y-3">
                      {recipe.tips.map((tip, index) => (
                        <li key={index} className="flex gap-2 items-start">
                          <span className="text-biryani-saffron mt-1">✦</span>
                          <p>{tip}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <section className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-playfair font-bold">Rate this recipe</h2>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => handleRate(star)}
                          className={`text-2xl ${star <= rating ? 'text-biryani-saffron' : 'text-gray-300'} hover:text-biryani-saffron transition-colors`}
                        >
                          <Star size={24} fill={star <= rating ? 'currentColor' : 'none'} />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3 mb-6">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={handleShare}
                    >
                      <Share2 size={16} />
                      Share
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                      onClick={() => setShowCommentInput(!showCommentInput)}
                    >
                      <MessageSquare size={16} />
                      Comment
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2"
                    >
                      <ThumbsUp size={16} />
                      Like
                    </Button>
                  </div>

                  {showCommentInput && (
                    <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                      <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-biryani-saffron focus:outline-none"
                        rows={3}
                        placeholder="Share your experience with this recipe..."
                      />
                      <div className="flex justify-end mt-2">
                        <Button
                          size="sm"
                          onClick={handleComment}
                          disabled={!comment.trim()}
                          className="bg-biryani-saffron hover:bg-biryani-spice text-white"
                        >
                          Submit
                        </Button>
                      </div>
                    </div>
                  )}
                </section>

                <RelatedRecipes recipes={relatedRecipes} />
              </div>

              <div>
                <section className="bg-biryani-cream p-6 rounded-lg sticky top-24">
                  <h2 className="text-xl font-playfair font-bold mb-4">Ingredients</h2>
                  <p className="text-sm text-gray-600 mb-4">For {recipe.servings} servings</p>
                  <ul className="space-y-3">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center gap-2 pb-2 border-b border-biryani-saffron/10 last:border-0">
                        <span className="w-2 h-2 bg-biryani-saffron rounded-full"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full bg-biryani-saffron hover:bg-biryani-spice text-white">
                      Print Recipe
                    </Button>
                  </div>
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
