
import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogPosts = [
    {
      id: "1",
      title: "5 Secrets to Perfect Biryani Rice Every Time",
      excerpt: "Master the art of cooking perfectly separated, aromatic basmati rice with these expert tips from top chefs.",
      date: "April 12, 2023",
      image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: {
        name: "Chef Rahul Kumar",
        avatar: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      tags: ["Tips & Techniques", "Rice Cooking", "Biryani Basics"]
    },
    {
      id: "2",
      title: "The Essential Biryani Spice Guide",
      excerpt: "Discover the 12 essential spices that create the complex, layered flavors in authentic biryani.",
      date: "March 28, 2023",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: {
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      tags: ["Spices", "Flavor Profiles", "Cooking Guide"]
    },
    {
      id: "3",
      title: "How to Create a Biryani Feast for Special Occasions",
      excerpt: "Plan the perfect biryani-centered celebration menu with these complementary sides and desserts.",
      date: "March 15, 2023",
      image: "https://images.unsplash.com/photo-1525518392674-39ba1febe603?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: {
        name: "Anjali Patel",
        avatar: "https://images.unsplash.com/photo-1553514029-1318c9127859?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      tags: ["Party Planning", "Menu Ideas", "Entertaining"]
    },
    {
      id: "4",
      title: "The History of Biryani: A Royal Dish's Journey",
      excerpt: "Trace the fascinating history of biryani from the Mughal court to modern international popularity.",
      date: "February 20, 2023",
      image: "https://images.unsplash.com/photo-1563379925646-75569969a3b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: {
        name: "Dr. Ahmed Khan",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      tags: ["Food History", "Culinary Culture", "Mughal Cuisine"]
    },
    {
      id: "5",
      title: "Regional Biryani Varieties: North vs South Indian Styles",
      excerpt: "Explore the key differences between North and South Indian biryani preparations and flavor profiles.",
      date: "January 30, 2023",
      image: "https://images.unsplash.com/photo-1633945274565-5f4bea20e266?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: {
        name: "Vikram Menon",
        avatar: "https://images.unsplash.com/photo-1600878459138-e1123b37cb30?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      tags: ["Regional Cuisine", "Cooking Styles", "Food Culture"]
    },
    {
      id: "6",
      title: "Vegetarian Biryani: Tips for Maximum Flavor Without Meat",
      excerpt: "Discover chef techniques for creating intensely flavorful vegetarian biryanis that rival their meat counterparts.",
      date: "January 10, 2023",
      image: "https://images.unsplash.com/photo-1645116458843-1e1fe8e78816?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      author: {
        name: "Meera Joshi",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
      },
      tags: ["Vegetarian", "Plant-Based", "Cooking Tips"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Biryani Blog - Tips, History & Culture | Biryani Bliss</title>
        <meta name="description" content="Explore articles about biryani cooking techniques, history, cultural significance, and more on our culinary blog." />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="py-10 bg-biryani-cream">
            <div className="biryani-container">
              <h1 className="text-4xl font-playfair font-bold text-biryani-charcoal mb-4">
                Biryani <span className="text-biryani-saffron">Blog</span>
              </h1>
              <p className="text-gray-700 max-w-2xl">
                Enhance your biryani knowledge with our expert tips, stories, and the latest trends in biryani culture.
                Dive into the rich world of flavors, techniques, and traditions.
              </p>
            </div>
          </div>

          <div className="biryani-container py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link 
                  to={`/blog/${post.id}`} 
                  key={post.id} 
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover-up"
                >
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-8 h-8 rounded-full"
                      />
                      <div>
                        <div className="text-sm font-medium">{post.author.name}</div>
                        <div className="text-xs text-gray-500">{post.date}</div>
                      </div>
                    </div>
                    <h2 className="font-playfair text-xl font-semibold text-biryani-charcoal mb-3">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-biryani-cream text-biryani-spice rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-biryani-spice font-medium text-sm flex items-center">
                      Read more
                      <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
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

export default Blogs;
