
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// All-India regional biryani types with short description and origin
const biryaniTypes = [
  {
    id: 1,
    name: "Hyderabadi Biryani",
    description: "A legacy of the Nizams, famous for its dum method and robust spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Hyderabad, Telangana"
  },
  {
    id: 2,
    name: "Lucknowi (Awadhi) Biryani",
    description: "Aromatic, refined, and subtle - biryani from royal Awadhi kitchens.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Lucknow, Uttar Pradesh"
  },
  {
    id: 3,
    name: "Kolkata Biryani",
    description: "Famous for potatoes, eggs, and mild, fragrant masalas.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Kolkata, West Bengal"
  },
  {
    id: 4,
    name: "Thalassery Biryani",
    description: "Kerala's coastal biryani using short grain rice and Malabar spices.",
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Thalassery, Kerala"
  },
  {
    id: 5,
    name: "Ambur Biryani",
    description: "Spicy, tangy biryani with seeraga samba rice & meat.",
    image: "https://images.unsplash.com/photo-1519864600265-c3c2ebc1c2b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Ambur, Tamil Nadu"
  },
  {
    id: 6,
    name: "Dindigul Biryani",
    description: "Fiery, sour biryani characterized by cubes of meat & unique masalas.",
    image: "https://images.unsplash.com/photo-1519864341742-e5381e2fd87e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Dindigul, Tamil Nadu"
  },
  {
    id: 7,
    name: "Bhatkali Biryani",
    description: "Layered rice and seafood, with chili and sweet tomato flavors.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Bhatkal, Karnataka"
  },
  {
    id: 8,
    name: "Sindhi Biryani",
    description: "Bold, tangy, aromatic rice with meat, yogurt, and potatoes.",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Sindh Region"
  },
  {
    id: 9,
    name: "Mughlai Biryani",
    description: "The royal style - rich, nutty, with saffron and dried fruits.",
    image: "https://images.unsplash.com/photo-1633945274565-5f4bea20e266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "North India"
  },
  {
    id: 10,
    name: "Bombay Biryani",
    description: "Famous for sweet-and-spicy notes, layered with fried potatoes.",
    image: "https://images.unsplash.com/photo-1519863813063-7a0cabc38e13?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Mumbai, Maharashtra"
  },
  {
    id: 11,
    name: "Kalyani Biryani",
    description: "The 'Poor man's Hyderabadi biryani', with beef and simple spices.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Hyderabad, Telangana"
  },
  {
    id: 12,
    name: "Beary Biryani",
    description: "Features coconut, poppy seeds, and fresh local spices.",
    image: "https://images.unsplash.com/photo-1481931715705-36f2cb9532b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Mangalore, Karnataka"
  },
  {
    id: 13,
    name: "Malabar Biryani",
    description: "Aromatic, coastal biryani with raisins and cashews.",
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Kerala"
  },
  {
    id: 14,
    name: "Chettinad Biryani",
    description: "Spicy and peppery, with fragrant short-grain rice.",
    image: "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Chettinad, Tamil Nadu"
  },
  {
    id: 15,
    name: "Memoni Biryani",
    description: "Extremely spicy, vibrant biryani from Gujarat-Sindh.",
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Sindh-Gujarat"
  },
  {
    id: 16,
    name: "Assamese Kampuri Biryani",
    description: "Fragrant biryani combining Assamese & Mughal flavors.",
    image: "https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Assam"
  },
  {
    id: 17,
    name: "Goan Fish Biryani",
    description: "Fresh seafood biryani, coconut, kokum, and lively spices.",
    image: "https://images.unsplash.com/photo-1519863862634-fc6fafc231ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Goa"
  },
  {
    id: 18,
    name: "Manipur Biryani",
    description: "Unique northeast style with herbs, veggies & local spice.",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Manipur"
  },
  {
    id: 19,
    name: "Andhra Biryani",
    description: "Extremely spicy, featuring green chilies and tangy flavors.",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Andhra Pradesh"
  },
  {
    id: 20,
    name: "Nagpuri Saoji Biryani",
    description: "Spiciest biryani, includes Saoji masalas and rich flavors.",
    image: "https://images.unsplash.com/photo-1515489421405-c7b668bdf43b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Nagpur, Maharashtra"
  },
  {
    id: 21,
    name: "Bohri Biryani",
    description: "Mild, juicy, layered biryani from Bohra Muslim kitchens.",
    image: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Mumbai, Maharashtra"
  },
  {
    id: 22,
    name: "Jharkhandi Biryani",
    description: "Rustic, earthy biryani influenced by tribal flavors.",
    image: "https://images.unsplash.com/photo-1447078806655-40579c2520d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Jharkhand"
  },
  {
    id: 23,
    name: "Rajasthani Ker Sangri Biryani (Veg)",
    description: "Unique desert style, uses dried ker sangri beans.",
    image: "https://images.unsplash.com/photo-1519863835630-8b511c1653b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Rajasthan"
  },
  {
    id: 24,
    name: "Udupi Biryani (Veg)",
    description: "Mild, fresh coconut-vegetable biryani, temple style.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    origin: "Udupi, Karnataka"
  },
];

const BiryaniTypes = () => {
  return (
    <section id="types" className="py-20 bg-gradient-to-b from-biryani-cream to-white">
      <div className="biryani-container">
        <div className="text-center mb-12">
          <h2 className="font-playfair font-bold text-biryani-charcoal mb-4">
            Explore the <span className="text-biryani-saffron">World</span> of Biryani
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Biryani has evolved into countless varieties across regions, each with its unique preparation techniques, spice blends, and cultural significance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {biryaniTypes.map((type) => (
            <Card key={type.id} className="overflow-hidden hover-up hover:shadow-lg group animate-fade-in">
              <div className="h-44 overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg text-biryani-charcoal">{type.name}</CardTitle>
                <CardDescription className="text-xs text-biryani-wood">Origin: {type.origin}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-xs">{type.description}</p>
              </CardContent>
              <CardFooter>
                <Link to={`/recipe/${type.id}`} className="w-full">
                  <Button variant="outline" className="w-full border-biryani-saffron text-biryani-saffron hover:bg-biryani-saffron hover:text-white text-xs">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/recipes" className="text-biryani-spice font-medium inline-block">
            View All Biryani Types &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BiryaniTypes;

