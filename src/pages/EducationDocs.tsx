import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Download, BookOpen, Code, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const documents = [
  {
    id: 1,
    title: "Product Manuals",
    category: "Hardware",
    description: "Detailed manuals for all our robotics and AI kits",
    files: 12,
    size: "45 MB",
    icon: <FileText className="h-6 w-6" />,
    image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
  },
  {
    id: 2,
    title: "Quick Start Guides",
    category: "Getting Started",
    description: "Step-by-step setup instructions for teachers and students",
    files: 8,
    size: "12 MB",
    icon: <BookOpen className="h-6 w-6" />,
    image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg"
  },
  {
    id: 3,
    title: "Software Documentation",
    category: "Software",
    description: "Documentation for our coding platforms and applications",
    files: 6,
    size: "8 MB",
    icon: <Code className="h-6 w-6" />,
    image: "/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png"
  },
  {
    id: 4,
    title: "Troubleshooting Guides",
    category: "Support",
    description: "Common issues and solutions for hardware and software problems",
    files: 5,
    size: "7 MB",
    icon: <FileText className="h-6 w-6" />,
    image: "/Learn Innovate Transform.png"
  }
];

const recentDocs = [
  {
    id: 1,
    title: "L.I.T. AI Tinker Kit User Manual v2.1",
    date: "2024-10-15",
    size: "3.2 MB",
    type: "PDF",
    image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
  },
  {
    id: 2,
    title: "Programming Environment Setup Guide",
    date: "2024-10-10",
    size: "1.8 MB",
    type: "PDF",
    image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg"
  },
  {
    id: 3,
    title: "Sensor Integration Tutorial",
    date: "2024-10-05",
    size: "2.1 MB",
    type: "PDF",
    image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg"
  },
  {
    id: 4,
    title: "Advanced Robotics Projects Collection",
    date: "2024-09-28",
    size: "5.4 MB",
    type: "PDF",
    image: "/Learn Innovate Transform.png"
  }
];

export default function EducationDocs() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive resources for teachers, students, and administrators. 
              Download manuals, guides, and technical documentation for all our products and programs.
            </p>
          </div>
          
          {/* Document Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {documents.map((doc) => (
              <div key={doc.id} className="rounded-2xl border bg-card p-6 hover-lift shadow-modern">
                <div className="w-12 h-12 rounded-lg bg-[#3BBBF0]/10 flex items-center justify-center mb-4 text-[#3BBBF0]">
                  {doc.icon}
                </div>
                
                <h3 className="text-lg font-bold mb-2">{doc.title}</h3>
                <span className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs font-medium mb-3">
                  {doc.category}
                </span>
                <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{doc.files} files</span>
                  <span>{doc.size}</span>
                </div>
                
                <Button className="w-full bg-[#FF822E] hover:bg-[#FF822E]/90">
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </Button>
              </div>
            ))}
          </div>
          
          {/* Recent Documents */}
          <div className="bg-card border rounded-2xl overflow-hidden mb-12">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold">Recent Documents</h2>
              <p className="text-muted-foreground">Latest additions to our documentation library</p>
            </div>
            
            <div className="divide-y">
              {recentDocs.map((doc) => (
                <div key={doc.id} className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800">
                  <div className="flex items-center gap-4">
                    {doc.image && (
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 flex items-center justify-center">
                        <img 
                          src={doc.image} 
                          alt={doc.title} 
                          className="max-h-full max-w-full object-contain p-2"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-medium mb-1">{doc.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{doc.date}</span>
                        <span>{doc.size}</span>
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-xs">
                          {doc.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="border-[#3BBBF0] text-[#3BBBF0] hover:bg-[#3BBBF0] hover:text-white">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
          
          {/* Search & Filter */}
          <div className="bg-gradient-to-br from-[#3BBBF0]/5 to-[#FF822E]/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Can't Find What You're Looking For?</h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#3BBBF0]"
                />
                <Button className="bg-[#FF822E] hover:bg-[#FF822E]/90">
                  Search
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {["AI Kits", "Robotics", "Programming", "Sensors", "Troubleshooting", "Curriculum"].map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-white dark:bg-gray-800 rounded-full text-sm border hover:border-[#3BBBF0]"
                  >
                    {tag}
                  </button>
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