import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Shield, Truck, RotateCcw } from "lucide-react";

// Mock product data - in a real app this would come from an API
const productData = [
  {
    id: 1,
    title: "L.I.T. AI Tinker Kit",
    slug: "ai-tinker-kit",
    category: "kits",
    price: 6999,
    compareAt: 7999,
    image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg",
    description: "100+ projects for beginners in AI & Robotics",
    level: "beginner",
    features: [
      "100+ guided projects with step-by-step instructions",
      "Plug-and-play components with no soldering required",
      "Compatible with block-based and Python programming",
      "Includes comprehensive curriculum aligned to NEP 2020",
      "Access to online learning platform with video tutorials"
    ],
    specs: [
      "1x Microcontroller Board",
      "10x Sensors (Motion, Light, Sound, Temperature)",
      "5x Actuators (Motors, Servos, LEDs)",
      "Smart Coding Hub with Bluetooth connectivity",
      "All necessary cables and accessories"
    ]
  },
  {
    id: 2,
    title: "L.I.T. AI Innovate Kit",
    slug: "ai-innovate-kit",
    category: "kits",
    price: 12999,
    compareAt: 14999,
    image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg",
    description: "Advanced robotics & AI for innovators",
    level: "advanced",
    features: [
      "200+ advanced projects in robotics and AI",
      "Industrial-grade components for real-world applications",
      "Supports Python, C++, and JavaScript programming",
      "Includes machine learning and computer vision modules",
      "Access to premium online resources and mentor support"
    ],
    specs: [
      "1x Advanced Microcontroller Board",
      "20+ Sensors (Proximity, Gyroscope, Accelerometer)",
      "10+ Actuators (High-torque Motors, Servos)",
      "AI Camera Module with Edge TPU",
      "Raspberry Pi 4 with pre-installed software"
    ]
  }
];

export default function ProductDetail() {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product by slug
  const product = productData.find(p => p.slug === slug) || productData[0];
  
  // Log for debugging
  console.log("Product slug:", slug);
  console.log("Found product:", product);
  
  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <a href="/" className="text-[#3BBBF0] hover:underline">Home</a>
            <span className="mx-2">/</span>
            <a href="/products" className="text-[#3BBBF0] hover:underline">Products</a>
            <span className="mx-2">/</span>
            <span className="text-muted-foreground">{product.title}</span>
          </nav>
          
          {/* Product Detail */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 rounded-2xl flex items-center justify-center mb-4">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="max-h-full max-w-full object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i} 
                    className="aspect-square bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 rounded-lg flex items-center justify-center"
                  >
                    <img 
                      src={product.image} 
                      alt={`${product.title} ${i}`} 
                      className="max-h-full max-w-full object-contain p-2"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-[#3BBBF0]/10 text-[#3BBBF0] rounded-full text-sm font-medium mb-4">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <p className="text-muted-foreground mb-6">{product.description}</p>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-[#FF822E] text-[#FF822E]" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(4.8) 128 reviews</span>
                </div>
                
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
                  {product.compareAt && (
                    <span className="text-xl line-through text-muted-foreground">
                      ₹{product.compareAt.toLocaleString()}
                    </span>
                  )}
                  {product.compareAt && (
                    <span className="px-2 py-1 bg-[#FF822E] text-white text-sm font-medium rounded">
                      Save ₹{(product.compareAt - product.price).toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Quantity Selector */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Quantity:</span>
                  <div className="flex items-center border rounded-lg">
                    <button 
                      onClick={decrementQuantity}
                      className="px-4 py-2 text-lg hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-4 py-2">{quantity}</span>
                    <button 
                      onClick={incrementQuantity}
                      className="px-4 py-2 text-lg hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="flex-1 bg-[#FF822E] hover:bg-[#FF822E]/90 py-3">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="flex-1 border-[#3BBBF0] text-[#3BBBF0] hover:bg-[#3BBBF0] hover:text-white py-3">
                  Buy Now
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Shield className="h-6 w-6 text-[#3BBBF0]" />
                  <div>
                    <p className="font-medium text-sm">2 Year Warranty</p>
                    <p className="text-xs text-muted-foreground">Hassle-free replacement</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Truck className="h-6 w-6 text-[#3BBBF0]" />
                  <div>
                    <p className="font-medium text-sm">Free Shipping</p>
                    <p className="text-xs text-muted-foreground">On orders above ₹5000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <RotateCcw className="h-6 w-6 text-[#3BBBF0]" />
                  <div>
                    <p className="font-medium text-sm">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">Within 30 days</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Star className="h-6 w-6 text-[#3BBBF0]" />
                  <div>
                    <p className="font-medium text-sm">Expert Support</p>
                    <p className="text-xs text-muted-foreground">Dedicated helpline</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Details Tabs */}
          <div className="mt-16 border-t pt-12">
            <div className="border-b mb-8">
              <nav className="flex gap-8">
                <button className="pb-4 border-b-2 border-[#3BBBF0] font-medium">Description</button>
                <button className="pb-4 text-muted-foreground hover:text-foreground">Specifications</button>
                <button className="pb-4 text-muted-foreground hover:text-foreground">Reviews</button>
              </nav>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Product Overview</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#3BBBF0] mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">What's in the Box</h3>
                  <ul className="space-y-3">
                    {product.specs.map((spec, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#3BBBF0] mr-2">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-[#3BBBF0]/5 to-[#FF822E]/5 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Learning Outcomes</h3>
                <p className="text-muted-foreground">
                  This kit helps students develop critical thinking, problem-solving, and programming skills through 
                  hands-on experimentation. Aligned with NEP 2020 guidelines, it promotes experiential learning and 
                  prepares students for future careers in STEM fields.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}