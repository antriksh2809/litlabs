import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Play, Clock, Users, ArrowLeft, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const tutorials = [
  {
    id: 1,
    title: "Getting Started with AI Tinker Kit",
    level: "Beginner",
    duration: "15 mins",
    views: "1.2K",
    description: "Learn how to set up and use your AI Tinker Kit for the first time",
    image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
  },
  {
    id: 2,
    title: "Programming Your First Robot",
    level: "Beginner",
    duration: "22 mins",
    views: "850",
    description: "Step-by-step guide to programming basic robot movements",
    image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg"
  },
  {
    id: 3,
    title: "Sensor Integration Basics",
    level: "Intermediate",
    duration: "35 mins",
    views: "620",
    description: "How to connect and use various sensors with your robotics kit",
    image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg"
  },
  {
    id: 4,
    title: "Advanced AI Concepts",
    level: "Advanced",
    duration: "48 mins",
    views: "430",
    description: "Exploring machine learning and computer vision applications",
    image: "/Learn Innovate Transform.png"
  },
  {
    id: 5,
    title: "Project: Smart Home Automation",
    level: "Intermediate",
    duration: "60 mins",
    views: "720",
    description: "Build a complete smart home system using IoT principles",
    image: "/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png"
  },
  {
    id: 6,
    title: "Troubleshooting Common Issues",
    level: "All Levels",
    duration: "28 mins",
    views: "980",
    description: "Solutions to frequently encountered problems with our kits",
    image: "/WhatsApp Image 2025-10-28 at 21.10.23.jpeg"
  }
];

export default function EducationTutorials() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Back Link */}
          <a 
            href="/education" 
            className="inline-flex items-center gap-2 text-[#3BBBF0] hover:text-[#3BBBF0]/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Education Hub
          </a>
          
          {/* Header */}
          <div className="bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 rounded-2xl p-8 mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Tutorials</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Step-by-step video guides and project walkthroughs to help you master our STEM kits. 
              From beginner setup to advanced applications, find the perfect tutorial for your skill level.
            </p>
          </div>
          
          {/* Tutorial Categories */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { name: "All", count: 24 },
              { name: "Beginner", count: 8 },
              { name: "Intermediate", count: 10 },
              { name: "Advanced", count: 6 }
            ].map((category) => (
              <button
                key={category.name}
                className={`py-3 px-4 rounded-xl border text-center ${
                  category.name === "All" 
                    ? "bg-[#3BBBF0] text-white border-[#3BBBF0]" 
                    : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                }`}
              >
                <div className="font-medium">{category.name}</div>
                <div className="text-sm opacity-80">{category.count} tutorials</div>
              </button>
            ))}
          </div>
          
          {/* Tutorials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="rounded-2xl border bg-card overflow-hidden hover-lift shadow-modern">
                <div className="relative aspect-video bg-gradient-to-br from-[#3BBBF0]/20 to-[#FF822E]/20">
                  <img 
                    src={tutorial.image} 
                    alt={tutorial.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:scale-110 transition-transform">
                      <Play className="h-6 w-6 text-[#3BBBF0] ml-1" />
                    </button>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {tutorial.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold">{tutorial.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tutorial.level === "Beginner" 
                        ? "bg-green-100 text-green-800" 
                        : tutorial.level === "Intermediate" 
                          ? "bg-yellow-100 text-yellow-800" 
                          : "bg-red-100 text-red-800"
                    }`}>
                      {tutorial.level}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-4">{tutorial.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      {tutorial.views} views
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {tutorial.duration}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Learning Path */}
          <div className="bg-gradient-to-br from-[#3BBBF0]/5 to-[#FF822E]/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Recommended Learning Path</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    step: 1,
                    title: "Foundations",
                    description: "Start with basic concepts and setup tutorials",
                    duration: "2 hours"
                  },
                  {
                    step: 2,
                    title: "Core Skills",
                    description: "Master programming and basic robotics concepts",
                    duration: "5 hours"
                  },
                  {
                    step: 3,
                    title: "Advanced Applications",
                    description: "Explore AI, machine learning, and complex projects",
                    duration: "10 hours"
                  }
                ].map((path) => (
                  <div key={path.step} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3BBBF0] text-white flex items-center justify-center font-bold">
                      {path.step}
                    </div>
                    <div className="flex-grow pb-6 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                      <h3 className="font-bold text-lg mb-1">{path.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{path.description}</p>
                      <div className="flex items-center gap-2 text-xs text-[#3BBBF0]">
                        <Clock className="h-3 w-3" />
                        {path.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-[#3BBBF0] to-[#FF822E] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Want More In-Depth Learning?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Access our comprehensive course catalog with structured curriculum and certification
            </p>
            <a href="/education/courses">
              <Button size="lg" className="bg-white text-[#3BBBF0] hover:bg-gray-100">
                <BookOpen className="h-4 w-4 mr-2" />
                View Courses
              </Button>
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}