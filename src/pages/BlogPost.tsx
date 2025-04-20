
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BlogPost = () => {
  const { id } = useParams();

  // Mock data - should come from an API/database
  const post = {
    id: "1",
    title: "5 Secrets to Perfect Biryani Rice Every Time",
    excerpt: "Master the art of cooking perfectly separated, aromatic basmati rice with these expert tips from top chefs.",
    content: `
      The perfect biryani starts with perfect rice. Here are the key techniques that will elevate your biryani rice game:

      1. Choose the Right Rice
      Always use aged, long-grain basmati rice. The aging process helps the rice develop a better texture and aroma when cooked.

      2. Proper Soaking
      Soak the rice for 30 minutes before cooking. This helps achieve the right texture and ensures each grain remains separate.

      3. Perfect Par-Boiling
      Cook the rice to exactly 70% done before layering. The rice should be firm but not hard in the center.

      4. Temperature Control
      Maintain low heat during the final dum cooking process. This allows the flavors to develop without overcooking the rice.

      5. Resting Period
      Always let your biryani rest for 10-15 minutes after cooking. This helps distribute the moisture evenly.
    `,
    date: "April 12, 2023",
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    author: {
      name: "Chef Rahul Kumar",
      avatar: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
    },
    tags: ["Tips & Techniques", "Rice Cooking", "Biryani Basics"]
  };

  return (
    <>
      <Helmet>
        <title>{post.title} - Biryani Bliss Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div className="relative h-[60vh] overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="biryani-container py-8">
                <div className="max-w-3xl">
                  <div className="flex items-center gap-4 text-white/90 mb-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <div>{post.author.name}</div>
                      <div className="text-sm">{post.date}</div>
                    </div>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
                    {post.title}
                  </h1>
                  <p className="text-white/90 text-lg">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="biryani-container py-12">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-biryani-cream text-biryani-spice rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
