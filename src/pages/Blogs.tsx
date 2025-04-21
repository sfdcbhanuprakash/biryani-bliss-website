
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Footer from '@/components/Footer';

const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);

  const allBlogPosts = [
    {
      id: "1",
      title: "5 Secrets to Perfect Biryani Rice Every Time",
      excerpt: "Master the art of cooking perfectly separated, aromatic basmati rice with these expert tips from top chefs.",
      category: "tips",
      date: "April 12, 2023",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "2",
      title: "The Essential Biryani Spice Guide",
      excerpt: "Discover the 12 essential spices that create the complex, layered flavors in authentic biryani.",
      category: "ingredients",
      date: "March 28, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "3",
      title: "How to Create a Biryani Feast for Special Occasions",
      excerpt: "Plan the perfect biryani-centered celebration menu with these complementary sides and desserts.",
      category: "entertaining",
      date: "March 15, 2023",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1525518392674-39ba1febe603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "4",
      title: "The History of Hyderabadi Biryani",
      excerpt: "Explore the royal origins and cultural significance of Hyderabad's most famous culinary export.",
      category: "history",
      date: "February 20, 2023",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1633945274565-5f4bea20e266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "5",
      title: "Vegetarian Biryani Variations That Will Impress Meat-Eaters",
      excerpt: "Flavorful vegetable-based biryanis that are so delicious, even devoted carnivores will ask for seconds.",
      category: "recipes",
      date: "February 5, 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "6",
      title: "Regional Biryani Rivalries: Which Style Reigns Supreme?",
      excerpt: "From Lucknow to Hyderabad to Kolkata - we explore the fierce debate over India's best biryani style.",
      category: "culture",
      date: "January 18, 2023",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "7",
      title: "Modern Biryani Innovations: Fusion Styles Taking Over",
      excerpt: "Contemporary chefs are reinventing biryani with global influences - discover these exciting new variations.",
      category: "trends",
      date: "January 5, 2023",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1631515242808-497c3d4a88cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "8",
      title: "The Science Behind Layering in Biryani",
      excerpt: "Understanding the chemistry and technique that makes properly layered biryani so special.",
      category: "tips",
      date: "December 12, 2022",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1642821373181-696a54913e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    },
    {
      id: "9",
      title: "Interview: Biryani Memories with Celebrity Chef Asma Khan",
      excerpt: "The renowned chef shares childhood stories and family secrets behind her famous biryani recipe.",
      category: "interviews",
      date: "November 25, 2022",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
    }
  ];

  useEffect(() => {
    let results = [...allBlogPosts];
    
    // Apply category filter
    if (activeCategory !== "all") {
      results = results.filter(post => post.category === activeCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(results);
  }, [activeCategory, searchQuery]);

  const categories = [
    { id: "all", name: "All Posts" },
    { id: "tips", name: "Cooking Tips" },
    { id: "ingredients", name: "Ingredients" },
    { id: "recipes", name: "Recipes" },
    { id: "history", name: "History" },
    { id: "culture", name: "Culture" },
    { id: "trends", name: "Trends" },
    { id: "entertaining", name: "Entertaining" },
    { id: "interviews", name: "Interviews" }
  ];

  // Get animation delay based on index
  const getAnimationDelay = (index: number) => {
    return `${(index % 3) * 100}ms`;
  };

  // Featured post (first post)
  const featuredPost = allBlogPosts[0];

  return (
    <>
      <Helmet>
        <title>Biryani Blog - Tips, History & Culture | Biryani Bliss</title>
        <meta name="description" content="Explore the world of biryani through our collection of expert tips, historical insights, and cultural stories." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <div className="py-8 bg-biryani-cream">
            <div className="biryani-container">
              <h1 className="text-4xl font-playfair font-bold text-biryani-charcoal mb-4">
                Biryani <span className="text-biryani-saffron">Blog</span>
              </h1>
              <p className="text-gray-700 max-w-2xl mb-6">
                Enhance your biryani knowledge with our expert tips, stories, and the latest trends in biryani culture.
                Discover the rich history, techniques, and cultural significance of this beloved dish.
              </p>
              
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-biryani-saffron focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex flex-wrap gap-2 overflow-x-auto pb-2">
                {categories.map(category => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={activeCategory === category.id ? "bg-biryani-saffron text-white" : ""}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="biryani-container py-12">
            {/* Featured Post */}
            {activeCategory === "all" && searchQuery === "" && (
              <div className="mb-16 animate-fade-in">
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="grid md:grid-cols-2 gap-8 bg-white rounded-xl overflow-hidden shadow-lg hover-up group"
                >
                  <div className="h-64 md:h-auto overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-biryani-spice rounded-full">
                        Featured Post
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-playfair font-bold text-biryani-charcoal mb-4">
                      {featuredPost.title}
                    </h2>
                    <div className="flex gap-4 text-sm text-gray-500 mb-4">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <p className="text-gray-700 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-biryani-spice hover:underline font-medium">
                        Read full article
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-playfair mb-4">No blog posts found</h2>
                <p className="text-gray-600 mb-6">Try adjusting your search or category filter</p>
                <Button 
                  onClick={() => {
                    setActiveCategory("all");
                    setSearchQuery("");
                  }}
                  className="bg-biryani-saffron hover:bg-biryani-spice text-white"
                >
                  Clear filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow hover-up group animate-fade-in"
                    style={{ animationDelay: getAnimationDelay(index) }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-sm text-gray-500 mb-2 flex justify-between">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="font-playfair text-xl font-semibold text-biryani-charcoal mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <span className="inline-flex items-center text-biryani-spice hover:underline font-medium">
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
            
            {/* Newsletter Signup */}
            <div className="mt-16 bg-biryani-cream rounded-lg p-8 text-center shadow-sm animate-fade-in">
              <h2 className="text-2xl font-playfair font-bold text-biryani-charcoal mb-3">
                Get Biryani Tips In Your Inbox
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Subscribe to our newsletter for exclusive recipes, cooking tips, and cultural insights about biryani.
                Be the first to know about new content and special offers.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-biryani-saffron focus:border-transparent"
                />
                <Button className="bg-biryani-saffron hover:bg-biryani-spice text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blogs;
