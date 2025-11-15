import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import BookDemoDialog from "@/components/BookDemoDialog";
import { useState } from "react";

const Labs = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#133458] to-[#3BBBF0] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">LITLABS Digital Planetarium</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore our comprehensive catalog of STEM learning solutions
          </p>
          <Button 
            onClick={() => setDemoDialogOpen(true)}
            className="bg-[#FF822E] hover:bg-[#FF822E]/90 text-white text-lg py-3 px-8"
          >
            Request Catalog
          </Button>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#133458] mb-6">Our STEM Solutions</h2>
            <p className="text-lg text-gray-600 mb-12">
              Discover our wide range of innovative educational products designed to transform learning environments 
              into interactive STEM experiences.
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                title: "STEM Park", 
                description: "150+ interactive outdoor learning installations", 
                image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg" 
              },
              { 
                title: "Major STEM Attractions", 
                description: "20+ flagship thematic installations", 
                image: "/Learn Innovate Transform.png" 
              },
              { 
                title: "Indoor Gallery - STEM Museum", 
                description: "100+ interactive museum exhibits", 
                image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg" 
              },
              { 
                title: "Evolution Zone", 
                description: "40+ paleontological collections", 
                image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg" 
              },
              { 
                title: "Teaching Aids", 
                description: "150+ classroom demonstration tools", 
                image: "/WhatsApp Image 2025-10-28 at 21.10.23.jpeg" 
              },
              { 
                title: "Play Equipment", 
                description: "200+ safe and engaging play solutions", 
                image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg" 
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                {category.image && (
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#133458] mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button variant="outline" className="border-[#3BBBF0] text-[#3BBBF0] hover:bg-[#3BBBF0] hover:text-white">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Quality Standards Section */}
          <div className="bg-gradient-to-r from-[#133458] to-[#3BBBF0] text-white rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Product Quality & Standards</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-4">Our Commitments</h3>
                <ul className="space-y-2">
                  {[
                    "Safety Certified - Meets international safety standards",
                    "Durability Tested - Built to withstand heavy use",
                    "Educationally Designed - Created with learning objectives",
                    "Environmentally Conscious - Sustainable materials when possible",
                    "Professionally Installed - Expert installation services available"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Premium Materials</h3>
                <ul className="space-y-2">
                  {[
                    { title: "FRP (Fiber Reinforced Plastic)", desc: "Weather-resistant, durable, colorfast" },
                    { title: "Stainless Steel (SS)", desc: "Corrosion-resistant, long-lasting" },
                    { title: "Cast Iron", desc: "Heavy-duty, stable, traditional" },
                    { title: "EVA Foam", desc: "Safe, cushioned, impact-absorbing" }
                  ].map((item, index) => (
                    <li key={index}>
                      <strong>{item.title}</strong> - {item.desc}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-gray-50 rounded-xl p-12">
            <h2 className="text-3xl font-bold text-[#133458] mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Ready to transform your educational space with our STEM solutions? Contact us today for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                onClick={() => setDemoDialogOpen(true)}
                className="bg-[#FF822E] hover:bg-[#FF822E]/90 text-white py-3 px-6"
              >
                Book a Demo
              </Button>
              <Button variant="outline" className="border-[#3BBBF0] text-[#3BBBF0] hover:bg-[#3BBBF0] hover:text-white py-3 px-6">
                Download Full Catalog
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BookDemoDialog open={demoDialogOpen} onClose={() => setDemoDialogOpen(false)} />
    </div>
  );
};

export default Labs;