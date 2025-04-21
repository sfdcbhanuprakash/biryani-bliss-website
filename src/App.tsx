
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecipeDetail from "./pages/RecipeDetail";
import BlogPost from "./pages/BlogPost";
import Recipes from "./pages/Recipes";
import Blogs from "./pages/Blogs";
import { RecipeSidebarLayout } from "./components/RecipeSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/recipes" element={
            <RecipeSidebarLayout>
              <Recipes />
            </RecipeSidebarLayout>
          } />
          <Route path="/recipe/:id" element={
            <RecipeSidebarLayout>
              <RecipeDetail />
            </RecipeSidebarLayout>
          } />
          <Route path="/blogs" element={
            <RecipeSidebarLayout>
              <Blogs />
            </RecipeSidebarLayout>
          } />
          <Route path="/blog/:id" element={
            <RecipeSidebarLayout>
              <BlogPost />
            </RecipeSidebarLayout>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
