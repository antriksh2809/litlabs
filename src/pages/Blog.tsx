import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, Tag } from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Teachers",
  "Schools",
  "Students",
  "AI & Robotics Lab",
  "Workshops",
  "CBSE",
  "ICSE",
  "Innovation"
];

const blogPosts = [
  {
    id: 1,
    title: "How AI & Robotics Labs Transform School Education",
    slug: "ai-robotics-labs-transform-education",
    excerpt: "Discover how implementing an AI & Robotics lab can revolutionize learning outcomes and student engagement in your school.",
    category: "Schools",
    author: "L.I.T. Labs Team",
    date: "2024-10-15",
    readTime: "5 min",
    image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
  },
  {
    id: 2,
    title: "NEP 2020: Integrating Experiential Learning in Classrooms",
    slug: "nep-2020-experiential-learning",
    excerpt: "A comprehensive guide for teachers on implementing NEP-aligned hands-on learning activities using robotics kits.",
    category: "Teachers",
    author: "Priya Sharma",
    date: "2024-10-12",
    readTime: "7 min",
    image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg"
  },
  {
    id: 3,
    title: "Student Success Story: Building an AI-Powered Smart Home",
    slug: "student-ai-smart-home-project",
    excerpt: "How a Grade 10 student used L.I.T. Labs kit to create an intelligent home automation system.",
    category: "Students",
    author: "Rohan Mehta",
    date: "2024-10-10",
    readTime: "4 min",
    image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg"
  },
  {
    id: 4,
    title: "Setting Up Your School's Atal Tinkering Lab: Complete Guide",
    slug: "atl-setup-guide",
    excerpt: "Step-by-step process for establishing an ATL-compliant innovation lab in your institution.",
    category: "AI & Robotics Lab",
    author: "L.I.T. Labs Team",
    date: "2024-10-08",
    readTime: "10 min",
    image: "/Learn Innovate Transform.png"
  },
  {
    id: 5,
    title: "5-Day AI Bootcamp: What Students Learn",
    slug: "5-day-ai-bootcamp-curriculum",
    excerpt: "Inside look at our intensive AI bootcamp curriculum and the projects students build.",
    category: "Workshops",
    author: "Anjali Singh",
    date: "2024-10-05",
    readTime: "6 min",
    image: "/WhatsApp Image 2025-10-28 at 21.10.23.jpeg"
  },
  {
    id: 6,
    title: "CBSE Skill Subjects: How Robotics Fits In",
    slug: "cbse-skill-subjects-robotics",
    excerpt: "Understanding how AI & Robotics aligns with CBSE skill subject requirements for grades 6-12.",
    category: "CBSE",
    author: "Dr. Rajesh Kumar",
    date: "2024-10-03",
    readTime: "5 min",
    image: "/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png"
  }
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-muted-foreground">
              Insights, stories, and resources for educators, students, and innovators
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b sticky top-16 bg-background z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-[#3BBBF0] text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <a
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border bg-card overflow-hidden hover-lift shadow-modern"
                >
                  {/* Image */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-[#3BBBF0]/20 to-[#FF822E]/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-gray-800/90 text-xs font-semibold">
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-[#3BBBF0] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground">No posts found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-gradient-to-r from-[#3BBBF0] to-[#FF822E] text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get the latest insights, resources, and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="px-6 py-3 bg-white text-[#3BBBF0] font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
