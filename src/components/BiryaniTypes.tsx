
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const biryaniTypes = [
  {
    id: 1,
    name: "Hyderabadi Biryani",
    description: "Known for its robust flavor, aromatic spices, and tender meat. The key is the 'dum' cooking method.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Hyderabad, India"
  },
  {
    id: 2,
    name: "Lucknowi Biryani",
    description: "Characterized by its delicate flavors, subtle spices, and the 'dum pukht' cooking style that makes it unique.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Lucknow, India"
  },
  {
    id: 3,
    name: "Kolkata Biryani",
    description: "Distinguished by the addition of potatoes and eggs, lighter spices, and a distinctive aroma from kewra water.",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Kolkata, India"
  },
  {
    id: 4,
    name: "Malabar Biryani",
    description: "Features unique coastal spices, shorter grain rice, and is known for its light, non-greasy texture.",
    image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Kerala, India"
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {biryaniTypes.map((type) => (
            <Card key={type.id} className="overflow-hidden hover-up hover:shadow-lg group">
              <div className="h-48 overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-biryani-charcoal">{type.name}</CardTitle>
                <CardDescription className="text-sm text-biryani-wood">Origin: {type.origin}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-biryani-saffron text-biryani-saffron hover:bg-biryani-saffron hover:text-white">
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-biryani-spice font-medium">
            View All Biryani Types &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BiryaniTypes;
