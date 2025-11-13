"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  image?: string;
  badge?: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "AI Starter Kit",
    category: "Robotics Kit",
    price: 4999,
    compareAtPrice: 6499,
    rating: 4.8,
    badge: "Bestseller",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop", // Unique image
  },
  {
    id: 2,
    title: "Quarky Robot",
    category: "DIY Kit",
    price: 3499,
    compareAtPrice: 4499,
    rating: 4.9,
    badge: "New",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=400&h=300&fit=crop", // Unique image
  },
  {
    id: 3,
    title: "PictoBlox Premium",
    category: "Software",
    price: 2999,
    compareAtPrice: 3999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop", // Unique image
  },
  {
    id: 4,
    title: "AI Learning Bundle",
    category: "Bundle",
    price: 8999,
    compareAtPrice: 12999,
    rating: 4.9,
    badge: "Save 30%",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop", // Unique image
  },
  {
    id: 5,
    title: "Advanced Robotics Kit",
    category: "Robotics Kit",
    price: 7999,
    compareAtPrice: 9999,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop", // Updated unique image
  },
  {
    id: 6,
    title: "Coding Curriculum Pack",
    category: "Books",
    price: 1999,
    compareAtPrice: 2999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop", // Unique image
  },
  {
    id: 7,
    title: "IoT Starter Kit",
    category: "Electronics",
    price: 5499,
    compareAtPrice: 6999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop", // Updated to a different IoT image
  },
  {
    id: 8,
    title: "School Lab Package",
    category: "Bundle",
    price: 49999,
    compareAtPrice: 69999,
    rating: 5.0,
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop", // Unique image
  },
];

const categories = [
  "All Products",
  "Robotics Kits",
  "DIY Kits",
  "Bundles",
  "Books",
  "Lab Setup",
];

export default function ShopCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollerRef.current) {
      const scrollAmount = 320;
      scrollerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="bg-white dark:bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <motion.div 
          className="flex items-center justify-between mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Shop Highlights</h2>
            <p className="text-muted-foreground mt-1">
              Explore our best-selling products and exclusive deals
            </p>
          </div>
          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border hover:border-primary hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Carousel */}
        <motion.div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
          style={{ scrollbarWidth: "none" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="min-w-[280px] snap-start rounded-2xl border bg-card overflow-hidden hover-lift shadow-modern group"
            >
              {/* Product Image */}
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
                {product.image ? (
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                )}
                {product.badge && (
                  <motion.div 
                    className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[hsl(var(--accent))] text-white text-xs font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {product.badge}
                  </motion.div>
                )}
                {!product.image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ShoppingCart className="h-12 w-12 text-primary/30" />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="text-xs text-muted-foreground mb-1">
                  {product.category}
                </div>
                <motion.h3 
                  className="font-semibold mb-2 group-hover:text-primary transition-colors"
                  whileHover={{ x: 3 }}
                >
                  {product.title}
                </motion.h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">(120)</span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-lg font-bold">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <>
                      <span className="text-sm line-through text-muted-foreground">
                        {formatPrice(product.compareAtPrice)}
                      </span>
                      <span className="text-xs font-semibold text-green-600">
                        {Math.round(
                          ((product.compareAtPrice - product.price) /
                            product.compareAtPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      className="flex-1 rounded-full bg-primary hover:bg-primary/90"
                      size="sm"
                    >
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Add to Cart
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      Quote
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-2"
            >
              View All Products →
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}