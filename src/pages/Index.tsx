import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BiryaniTypes from '@/components/BiryaniTypes';
import RecipeSection from '@/components/RecipeSection';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const blogSection = (
  <section id="blog" className="py-20 bg-white">
    <div className="biryani-container">
      <div className="text-center mb-12">
        <h2 className="font-playfair font-bold text-biryani-charcoal mb-4">
          Biryani <span className="text-biryani-saffron">Tips & Stories</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Enhance your biryani knowledge with our expert tips, stories, and the latest trends in biryani culture.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            id: "1",
            title: "5 Secrets to Perfect Biryani Rice Every Time",
            excerpt: "Master the art of cooking perfectly separated, aromatic basmati rice with these expert tips from top chefs.",
            date: "April 12, 2023",
            image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          },
          {
            id: "2",
            title: "The Essential Biryani Spice Guide",
            excerpt: "Discover the 12 essential spices that create the complex, layered flavors in authentic biryani.",
            date: "March 28, 2023",
            image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          },
          {
            id: "3",
            title: "How to Create a Biryani Feast for Special Occasions",
            excerpt: "Plan the perfect biryani-centered celebration menu with these complementary sides and desserts.",
            date: "March 15, 2023",
            image: "https://images.unsplash.com/photo-1525518392674-39ba1febe603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
        ].map((post) => (
          <div key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover-up">
            <div className="h-48 overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-5">
              <div className="text-sm text-gray-500 mb-2">{post.date}</div>
              <h3 className="font-playfair text-xl font-semibold text-biryani-charcoal mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-biryani-spice hover:underline font-medium"
              >
                Read more
                <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Link 
          to="/blogs" 
          className="inline-block px-6 py-3 bg-biryani-saffron text-white font-medium rounded-lg hover:bg-biryani-spice transition-colors"
        >
          View All Articles
        </Link>
      </div>
    </div>
  </section>
);

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Biryani Bliss - Authentic Chicken Biryani Recipes & History</title>
        <meta name="description" content="Discover authentic chicken biryani recipes, explore regional varieties, and learn the rich history behind India's most beloved dish. Perfect your biryani cooking skills with our expert guides." />
        <meta name="keywords" content="chicken biryani, authentic biryani recipes, hyderabadi biryani, lucknowi biryani, kolkata biryani, how to make biryani, biryani history" />
        {/* Open Graph / Social Media Meta Tags */}
        <meta property="og:title" content="Biryani Bliss - Authentic Chicken Biryani Recipes" />
        <meta property="og:description" content="Explore the world of authentic chicken biryani with expert recipes, regional varieties, and cooking techniques." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://biryanibliss.com" />
        <meta property="og:image" content="https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
        {/* Schema.org Markup for Recipes */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Recipe",
              "name": "Authentic Hyderabadi Chicken Biryani",
              "image": "https://images.unsplash.com/photo-1633945274565-5f4bea20e266",
              "author": {
                "@type": "Organization",
                "name": "Biryani Bliss"
              },
              "datePublished": "2023-04-20",
              "description": "Learn the authentic dum method of preparing aromatic Hyderabadi Biryani with tender chicken pieces.",
              "prepTime": "PT30M",
              "cookTime": "PT60M",
              "totalTime": "PT90M",
              "recipeYield": "4 servings",
              "recipeCategory": "Main Course",
              "recipeCuisine": "Indian",
              "keywords": "hyderabadi biryani, chicken biryani, dum biryani, indian rice dish",
              "nutrition": {
                "@type": "NutritionInformation",
                "calories": "450 calories"
              },
              "recipeIngredient": [
                "500g basmati rice",
                "750g chicken",
                "2 onions",
                "4 tomatoes",
                "2 tbsp ginger-garlic paste",
                "4 green chilies",
                "1/2 cup mint leaves",
                "1/2 cup coriander leaves",
                "1 cup yogurt",
                "2 tbsp biryani masala",
                "1 tsp turmeric powder",
                "1 tsp red chili powder",
                "4 tbsp ghee",
                "Saffron strands soaked in milk"
              ],
              "recipeInstructions": [
                "Marinate the chicken with yogurt and spices for at least 2 hours.",
                "Par-boil the basmati rice with whole spices until 70% cooked.",
                "In a heavy-bottomed pot, layer the marinated chicken and partially cooked rice.",
                "Drizzle with saffron milk, fried onions, and ghee.",
                "Seal the pot with dough and cook on low heat for 25-30 minutes.",
                "Let it rest for 10 minutes before opening and serving."
              ]
            }
          `}
        </script>
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <BiryaniTypes />
          <RecipeSection />
          
          {/* History Section */}
          <section id="history" className="py-20 bg-biryani-cream">
            <div className="biryani-container">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2">
                  <h2 className="font-playfair font-bold text-biryani-charcoal mb-4">
                    The Rich <span className="text-biryani-saffron">History</span> of Biryani
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Biryani's origins trace back to the royal kitchens of the Mughal Empire in the 16th century. The word "biryani" comes from the Persian word "birian" which means "fried before cooking" and "birinj" which means rice.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Legend has it that Mumtaz Mahal, wife of Shah Jahan, once visited army barracks and found the soldiers undernourished. She asked the chef to prepare a nutritious dish that combined meat and rice - thus creating what would evolve into biryani.
                  </p>
                  <p className="text-gray-700 mb-6">
                    As the Mughal influence spread across the Indian subcontinent, biryani adapted to local tastes and ingredients, giving rise to the countless regional varieties we enjoy today - from the spicy Hyderabadi to the delicate Lucknowi styles.
                  </p>
                  <div>
                    <a href="#" className="text-biryani-spice font-medium hover:underline">
                      Read the full history &rarr;
                    </a>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                      alt="Historical biryani preparation" 
                      className="rounded-lg shadow-xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded shadow-lg w-32 h-32 flex items-center justify-center">
                      <div className="text-center">
                        <span className="block text-3xl font-bold text-biryani-saffron">400+</span>
                        <span className="text-sm text-gray-600">Years of History</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Blog Section */}
          {blogSection}
          
          {/* CTA Section */}
          <section className="py-16 bg-gradient-to-r from-biryani-charcoal to-biryani-wood text-white">
            <div className="biryani-container text-center">
              <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6">
                Ready to Create Your <span className="text-biryani-saffron">Perfect Biryani</span>?
              </h2>
              <p className="max-w-2xl mx-auto text-white/80 mb-8 text-lg">
                Join thousands of biryani enthusiasts who have mastered the art of preparing this royal dish with our expert guides and authentic recipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-biryani-saffron hover:bg-biryani-spice text-white text-lg py-6 px-8">
                  Explore Top Recipes
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
                  Subscribe to Newsletter
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
