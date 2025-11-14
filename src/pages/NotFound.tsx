import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
            <Search className="h-16 w-16 text-[#3BBBF0]" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-[#3BBBF0] to-[#FF822E] bg-clip-text text-transparent">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#133458]">
            Page Not Found
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.history.back()}
              variant="outline"
              className="border-[#3BBBF0] text-[#3BBBF0] hover:bg-[#3BBBF0] hover:text-white"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
            <Button 
              onClick={() => window.location.href = '/'}
              className="bg-[#FF822E] hover:bg-[#FF822E]/90"
            >
              Return Home
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;