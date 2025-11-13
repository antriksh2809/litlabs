import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart, Star, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const products = [
  {
    id: 1,
    title: "L.I.T. AI Tinker Kit",
    category: "Kits",
    price: 6999,
    compareAt: 7999,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    inStock: true,
  },
  {
    id: 2,
    title: "L.I.T. AI Innovate Kit",
    category: "Kits",
    price: 12999,
    compareAt: 14999,
    rating: 4.9,
    reviews: 87,
    badge: "New",
    inStock: true,
  },
  {
    id: 3,
    title: "Servo Motor Pack (5pcs)",
    category: "Add-ons",
    price: 899,
    rating: 4.6,
    reviews: 203,
    inStock: true,
  },
  {
    id: 4,
    title: "Ultrasonic Sensor Module",
    category: "Sensors",
    price: 299,
    rating: 4.7,
    reviews: 156,
    inStock: true,
  },
  {
    id: 5,
    title: "School Lab Bundle",
    category: "Bundles",
    price: 49999,
    compareAt: 59999,
    rating: 5.0,
    reviews: 34,
    badge: "Best Value",
    inStock: true,
  },
  {
    id: 6,
    title: "Coding & Robotics Curriculum Book",
    category: "Books",
    price: 599,
    rating: 4.5,
    reviews: 89,
    inStock: true,
  },
];

const categories = ["All Products", "Kits", "Add-ons", "Sensors", "Bundles", "Books"];
const sortOptions = ["Popular", "Price: Low to High", "Price: High to Low", "Newest"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [sortBy, setSortBy] = useState("Popular");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = selectedCategory === "All Products"
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-4xl font-bold mb-2">Shop</h1>
            <p className="text-muted-foreground">
              AI & Robotics kits, sensors, and learning resources
            </p>
          </div>
        </section>

        <div className="container mx-auto px-4 max-w-7xl py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className={`lg:w-64 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="sticky top-24 space-y-6">
                {/* Categories */}
                <div>
                  <h3 className="font-semibold mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === cat
                            ? "bg-[#3BBBF0] text-white"
                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold mb-3">Price Range</h3>
                  <div className="space-y-2">
                    {["Under ₹1,000", "₹1,000 - ₹5,000", "₹5,000 - ₹10,000", "Above ₹10,000"].map((range) => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Stock Status */}
                <div>
                  <h3 className="font-semibold mb-3">Availability</h3>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm">In Stock Only</span>
                  </label>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Toolbar */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                  </button>
                  <span className="text-sm text-muted-foreground">
                    {filteredProducts.length} products
                  </span>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 rounded-lg border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-[#3BBBF0]"
                >
                  {sortOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group rounded-2xl border bg-card overflow-hidden hover-lift shadow-modern"
                  >
                    {/* Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 relative">
                      {product.badge && (
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#FF822E] text-white text-xs font-semibold">
                          {product.badge}
                        </div>
                      )}
                      {product.compareAt && (
                        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                          {Math.round(((product.compareAt - product.price) / product.compareAt) * 100)}% OFF
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <div className="text-xs text-muted-foreground mb-1">{product.category}</div>
                      <h3 className="font-semibold mb-2 group-hover:text-[#3BBBF0] transition-colors">
                        {product.title}
                      </h3>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium ml-1">{product.rating}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                        {product.compareAt && (
                          <span className="text-sm line-through text-muted-foreground">
                            ₹{product.compareAt.toLocaleString()}
                          </span>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-[#FF822E] hover:bg-[#FF822E]/90" size="sm">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                        <Button variant="outline" size="sm">
                          Quote
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
