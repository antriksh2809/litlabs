import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
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
  },
  // Add more products as needed
];

const categories = ["All", "Kits", "Add-ons", "Sensors", "Bundles"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");

  const filteredProducts = products.filter((product) => {
    const categoryMatch = selectedCategory === "All" || product.category === selectedCategory.toLowerCase();
    const levelMatch = selectedLevel === "All Levels" || product.level === selectedLevel.toLowerCase();
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Products</h1>
            <p className="text-muted-foreground">
              Plug-and-play kits for hands-on AI, Robotics & IoT learning
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Category</label>
              <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === cat
                        ? "bg-[#3BBBF0] text-white"
                        : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Skill Level</label>
              <div className="flex gap-2 flex-wrap">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedLevel === level
                        ? "bg-[#3BBBF0] text-white"
                        : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <a
                key={product.id}
                href={`/products/${product.slug}`}
                className="group rounded-2xl border bg-card overflow-hidden hover-lift shadow-modern"
              >
                <div className="aspect-[4/3] bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 relative flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="max-h-full max-w-full object-contain p-8"
                  />
                  {product.compareAt > product.price && (
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#FF822E] text-white text-xs font-semibold">
                      Save {Math.round(((product.compareAt - product.price) / product.compareAt) * 100)}%
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-[#FF822E] text-[#FF822E]" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">(4.8)</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-[#3BBBF0] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
                    {product.compareAt && (
                      <span className="text-sm line-through text-muted-foreground">
                        ₹{product.compareAt.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <Button className="w-full bg-[#FF822E] hover:bg-[#FF822E]/90">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}