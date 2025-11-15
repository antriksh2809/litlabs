import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userName, setUserName] = useState("");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Get user name from localStorage
    const storedName = localStorage.getItem("userNameLIT");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  useEffect(() => {
    // Set page title and meta description based on route
    let title = "L.I.T. Labs - Learn. Innovate. Transform.";
    let description = "The complete 21st century skills ecosystem. Learn from industry experts. Innovate with AI-powered personalization. Transform with hands-on labs.";

    switch (location.pathname) {
      case "/":
        title = "L.I.T. Labs - The Complete 21st Century Skills Ecosystem";
        description = "Learn from industry experts. Innovate with AI-powered personalization. Transform with hands-on labs. One complete ecosystem. Infinite possibilities.";
        break;
      case "/learn":
        title = "Learn - L.I.T. Labs";
        description = "Certified 21st-century skills courses taught by certified trainers. Available online & offline. Curriculum aligned with NEP 2020, NCF 2023, CBSE, ICSE.";
        break;
      case "/innovate":
        title = "Innovate - L.I.T. Labs";
        description = "AI-powered software that adapts to each student's unique learning style, pace, and needs. Real-time performance insights and intelligent recommendations.";
        break;
      case "/transform":
        title = "Transform - L.I.T. Labs";
        description = "Complete innovation ecosystem with ready-to-deploy labs for Robotics, AI, Drones, and 3D Printing. DIY kits and maker equipment for hands-on learning.";
        break;
      case "/solutions":
        title = "Solutions - L.I.T. Labs";
        description = "Complete school implementation solutions with certified courses, AI software, and innovation labs integrated into one platform.";
        break;
      case "/blog":
        title = "Blog - L.I.T. Labs";
        description = "Insights, resources, and updates on 21st century skills education, NEP implementation, and innovative teaching methods.";
        break;
    }

    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement('meta');
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "L.I.T. Labs",
      "url": "https://www.litlabs.in",
      "logo": "https://www.litlabs.in/logo.png",
      "description": "The complete 21st century skills ecosystem. Learn from industry experts. Innovate with AI-powered personalization. Transform with hands-on labs.",
      "sameAs": [
        "https://www.facebook.com/litlabs",
        "https://www.twitter.com/litlabs",
        "https://www.linkedin.com/company/litlabs",
        "https://www.instagram.com/litlabs"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-8468076121",
          "contactType": "Customer Service"
        }
      ]
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [location]);

  const navItems = [
    { name: "Learn", path: "/learn" },
    { name: "Innovate", path: "/innovate" },
    { name: "Transform", path: "/transform" },
    { name: "Solutions", path: "/solutions" },
    { name: "Blog", path: "/blog" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg py-2" : "bg-white/90 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/Gemini_Generated_Image_mey00qmey00qmey0-removebg-preview.png" 
              alt="L.I.T. Labs Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-accent">L.I.T. Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path ? "text-primary" : "text-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Profile and Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-foreground">
              <Phone className="h-4 w-4" />
              <span>+91-8468076121</span>
            </div>
            <div className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-full">
              <User className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{userName || "Guest"}</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium py-2 ${
                    location.pathname === item.path ? "text-primary" : "text-foreground"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-foreground mb-4">
                  <Phone className="h-4 w-4" />
                  <span>+91-8468076121</span>
                </div>
                <div className="flex items-center space-x-2 bg-muted px-3 py-2 rounded-full w-fit">
                  <User className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">{userName || "Guest"}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;