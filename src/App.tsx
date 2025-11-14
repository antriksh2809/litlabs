import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Education from "./pages/Education";
import EducationCourses from "./pages/EducationCourses";
import EducationDocs from "./pages/EducationDocs";
import EducationTutorials from "./pages/EducationTutorials";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Shop from "./pages/Shop";
import Labs from "./pages/Labs";
import ComingSoon from "./components/ComingSoon";

// Debug component to log current path
const DebugRoute = () => {
  const location = useLocation();
  console.log("Current path:", location.pathname);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DebugRoute />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/education" element={<Education />} />
          <Route path="/education/courses" element={<EducationCourses />} />
          <Route path="/education/docs" element={<EducationDocs />} />
          <Route path="/education/tutorials" element={<EducationTutorials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/labs" element={<Labs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;