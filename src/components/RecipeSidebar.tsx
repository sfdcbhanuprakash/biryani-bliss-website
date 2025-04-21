
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChefHat, Home, BookOpen, History, Search } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

interface RecipeSidebarProps {
  children: React.ReactNode;
}

export const RecipeSidebarLayout: React.FC<RecipeSidebarProps> = ({ children }) => {
  return (
    <SidebarProvider>
      <div className="flex w-full min-h-screen relative">
        <RecipeSidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
};

const RecipeSidebar = () => {
  const location = useLocation();
  
  const menuItems = [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "All Recipes",
      url: "/recipes",
      icon: ChefHat,
    },
    {
      title: "Blog & Tips",
      url: "/blogs",
      icon: BookOpen,
    },
    {
      title: "History",
      url: "/#history",
      icon: History,
    },
  ];

  const popularRecipes = [
    { id: 1, name: "Hyderabadi Chicken Biryani" },
    { id: 2, name: "Lucknowi Chicken Biryani" },
    { id: 3, name: "Kolkata Biryani" },
    { id: 4, name: "Malabar Biryani" },
    { id: 5, name: "Sindhi Biryani" },
  ];

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader className="flex items-center gap-2 px-4">
        <Link to="/" className="flex items-center gap-1">
          <span className="text-biryani-saffron text-2xl">✦</span>
          <span className="font-playfair font-bold text-lg text-biryani-charcoal">
            Biryani <span className="text-biryani-saffron">Bliss</span>
          </span>
        </Link>
        <SidebarTrigger className="ml-auto" />
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === item.url}
                    tooltip={item.title}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Popular Recipes</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {popularRecipes.map((recipe) => (
                <SidebarMenuItem key={recipe.id}>
                  <SidebarMenuButton 
                    asChild
                    isActive={location.pathname === `/recipe/${recipe.id}`}
                    tooltip={recipe.name}
                  >
                    <Link to={`/recipe/${recipe.id}`}>
                      <ChefHat />
                      <span>{recipe.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            Discover your perfect biryani recipe today!
          </div>
          <Button className="w-full bg-biryani-saffron hover:bg-biryani-spice text-white">
            <Search className="mr-2 h-4 w-4" />
            Search Recipes
          </Button>
        </div>
      </SidebarFooter>
      
      <SidebarRail />
    </Sidebar>
  );
};

export default RecipeSidebar;
