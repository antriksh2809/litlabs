import { useState } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Labs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#133458] via-[#00A9CE] to-[#133458]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Page Content */}
          <div className="min-h-[600px] p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {/* Page 1: Cover */}
                {currentPage === 1 && (
                  <div className="flex flex-col items-center justify-center min-h-[500px] text-center bg-gradient-to-br from-[#133458] to-[#00A9CE] text-white rounded-lg p-12">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-widest">LITLABS</h1>
                    <h2 className="text-3xl md:text-4xl mb-8 tracking-wide">DIGITAL PLANETARIUM</h2>
                    <p className="text-2xl mb-4 font-medium">Learn • Innovate • Transform</p>
                    <p className="text-lg italic opacity-90 mt-8">EVER SATISFIED CUSTOMER EVERYWHERE</p>
                  </div>
                )}

                {/* Page 2: Table of Contents */}
                {currentPage === 2 && (
                  <div>
                    <h1 className="text-4xl font-bold text-[#133458] mb-8 pb-4 border-b-4 border-[#00A9CE]">Table of Contents</h1>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        { num: "01", title: "STEM Park", page: 3 },
                        { num: "02", title: "Major STEM Attractions", page: 4 },
                        { num: "03", title: "Indoor Gallery - STEM Museum", page: 5 },
                        { num: "04", title: "Evolution Zone", page: 6 },
                        { num: "05", title: "Teaching Aids", page: 7 },
                        { num: "06", title: "Play Equipment", page: 8 },
                        { num: "07", title: "Toddler Toys", page: 9 },
                        { num: "08", title: "Outdoor Fitness", page: 10 },
                        { num: "09", title: "Product Quality & Standards", page: 11 },
                        { num: "10", title: "Contact & Services", page: 12 }
                      ].map((item) => (
                        <div
                          key={item.num}
                          onClick={() => goToPage(item.page)}
                          className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg cursor-pointer transition-all hover:from-[#00A9CE] hover:to-[#133458] hover:text-white hover:translate-x-2 border-l-4 border-[#00A9CE] group"
                        >
                          <span className="font-bold text-[#133458] text-lg mr-3 group-hover:text-white">{item.num}</span>
                          <span className="font-medium">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Page 3: STEM Park */}
                {currentPage === 3 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold mb-2">STEM Park</h1>
                      <p className="text-xl opacity-90">150+ Products</p>
                    </div>
                    <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/268a3dc0-3115-41c3-b058-3e47e6964272.png" alt="STEM Park" className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg" />
                    <p className="text-lg text-gray-700 mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#00A9CE]">
                      Science, Technology, Engineering, Mathematics - Learning through Play-way gadgets. Transform outdoor spaces into interactive learning environments where students explore fundamental scientific principles through hands-on experiences.
                    </p>
                    
                    <div className="space-y-6">
                      <ProductCategory title="Applied Science" items={["Build an Arch Bridge", "Automobile Working Model", "Archimedes Screw", "Geodesic Dome"]} />
                      <ProductCategory title="Mechanics" items={["Angular Momentum", "Pulley & Pulley Blocks", "First Order Lever", "Centrifugal Force", "Double Ended Cone", "Gyroscope", "Gear, Belt & Chain Drive", "Loop the Loop", "Simple Harmonic Motion", "Compound Pendulum", "Wave Motion", "Lissajou's Figure", "Variable Pendulum"]} />
                      <ProductCategory title="Light & Optics" items={["Nipkow's Disc", "Revolving Periscope", "Pin Hole Camera", "Illusion"]} />
                      <ProductCategory title="Sound & Acoustics" items={["Bell Tower", "Statue Speaks", "Xylophone", "Musical Tubes"]} />
                      <ProductCategory title="Mathematics" items={["Ellipse Table", "Conical Section", "Parabola", "Straight Bar Passing"]} />
                    </div>
                  </div>
                )}

                {/* Page 4: Major STEM Attractions */}
                {currentPage === 4 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold mb-2">Major STEM Attractions</h1>
                      <p className="text-xl opacity-90">20+ Themes</p>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#00A9CE]">
                      Transform your educational space into an immersive learning environment with our flagship attractions. These centerpiece installations create memorable experiences that inspire curiosity and deep engagement with STEM concepts.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {["Observatory Dome with Telescope", "Digital Planetarium", "Science on Globe", "Innovation / Robotics Hub", "Evolution Zone", "Maths Zone", "Drone & Rover Zone", "Astronomy Zone", "Science Zone", "Rain Water Harvesting", "Scientist Statue", "Maths Sculpture", "AR Sandbox", "Rocket Models"].map((item, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-[#133458] font-medium">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Page 5: Indoor Gallery */}
                {currentPage === 5 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold mb-2">Indoor Gallery - STEM Museum</h1>
                      <p className="text-xl opacity-90">100+ Products</p>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#00A9CE]">
                      Engaging indoor learning environment with curated interactive exhibits. Create a world-class museum experience with exhibits that captivate visitors and demonstrate complex scientific principles in accessible, engaging ways.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      {["Head on Platter", "Tyndall Effect", "Curie Point", "Jacobs Ladder", "Test Your Reaction", "Mirror Maze", "How LED Works", "Infinity Space Window"].map((item, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-[#133458] font-medium">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Page 6: Evolution Zone */}
                {currentPage === 6 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold mb-2">Evolution Zone</h1>
                      <p className="text-xl opacity-90">40+ Products</p>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#00A9CE]">
                      Journey through Earth's prehistoric past with museum-quality paleontological collection. Bring natural history to life with scientifically accurate, visually stunning replicas that educate and inspire wonder about our planet's ancient inhabitants.
                    </p>
                    
                    <div className="space-y-6">
                      <ProductCategory title="Dinosaurs" items={["Tyrannosaurus Rex", "Anatosaurus", "Corythosaurus", "Ankylosaurus", "Stegosaurus", "Scelidosaurus", "Gallimimus", "Baryonyx (Oviraptor)"]} />
                      <ProductCategory title="Pterosaurus & Marine Life" items={["Pteranodon", "Trilobite"]} />
                      <ProductCategory title="Extinct Birds & Animals" items={["Deinotherium", "Dimetrodon", "Diatryma", "Megaloceros"]} />
                      <ProductCategory title="Prehistoric Environment" items={["Palm Trees", "Cactus", "Chimpanzee", "Neanderthal Man"]} />
                    </div>
                  </div>
                )}

                {/* Page 7: Teaching Aids */}
                {currentPage === 7 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold mb-2">Teaching Aids</h1>
                      <p className="text-xl opacity-90">150+ Products</p>
                    </div>
                    <p className="text-lg text-gray-700 mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#00A9CE]">
                      Comprehensive and interactive educational tools for classroom learning and engagement. Enhance curriculum delivery with hands-on demonstrations that make abstract concepts tangible and memorable for students of all ages.
                    </p>
                    
                    <div className="space-y-6">
                      <ProductCategory title="Kinetics" items={["Wave Motion with Pendulum", "Wave Motion Hand Rotation", "Coupled Pendulum Resonance"]} />
                      <ProductCategory title="Heat & Thermodynamics" items={["Heat Switch", "Heating Effect of Current", "Linear Expansion", "Ball and Ring Apparatus"]} />
                      <ProductCategory title="Light & Sound" items={["Pin Hole Camera", "Optic Kit", "Musical Tubes", "Tuning Fork"]} />
                      <ProductCategory title="Astronomy" items={["Phases of Moon", "Solar System", "Day and Night Set", "Seasons"]} />
                      <ProductCategory title="Biology" items={["Human Skin", "Human Lung", "DNA", "Human Brain"]} />
                    </div>
                  </div>
                )}

                {/* Page 8: Play Equipment */}
                {currentPage === 8 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold mb-2">Play Equipment</h1>
                      <p className="text-xl opacity-90">200+ Products</p>
                    </div>
                    <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/44ca6cbd-9c4b-4e8e-8bf4-05cd9593bb14.png" alt="Play Equipment" className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg" />
                    <p className="text-lg text-gray-700 mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#00A9CE]">
                      Create vibrant, safe, and engaging play spaces that promote physical development. Our equipment combines durability with fun, supporting active lifestyles and social interaction while meeting the highest safety standards.
                    </p>
                    
                    <div className="space-y-6">
                      <ProductCategory title="See Saw & Rider" items={["See Saw 2 Seater FRP", "Kiddies See Saw 4 Seater Horse FRP Seat", "Spring Rider", "Spring Rider Duck"]} />
                      <ProductCategory title="Swing" items={["Swing 2 Seater (FRP Seat with SS Chain)", "Circular Swing - Wooden Seat", "Swing Single Seater (FRP Bucket)", "6 Seater Dome Swing"]} />
                      <ProductCategory title="Slide" items={["Slide Senior FRP", "Roller Slide Junior", "Spiral Slide Senior FRP", "Wave Slide FRP Senior", "Flat Slide"]} />
                    </div>
                  </div>
                )}

                {/* Page 9: Toddler Toys */}
                {currentPage === 9 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold mb-2">Toddler Toys</h1>
                      <p className="text-xl opacity-90">100+ Products</p>
                    </div>
                    <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/06c9633e-6386-4384-9764-ef1e79ce8988.png" alt="Toddler Toys" className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg" />
                    <p className="text-lg text-gray-700 mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#00A9CE]">
                      Specialized equipment for early childhood development focusing on safety and sensory exploration. Designed specifically for toddlers, our products support motor skill development, balance, and confidence building in a safe, engaging environment.
                    </p>
                    
                    <div className="space-y-6">
                      <ProductCategory title="Inflatable Toys" items={["Inflatable Toy Puppy", "Inflatable Toy Unicorn", "Inflatable Toy Dolphin", "Inflatable Toy Deer"]} />
                      <ProductCategory title="Rocker & Rider" items={["Rocker", "Rocking Elephant", "Puppy Car", "Rocking Bonnie", "Rocking Horse", "Bee Scater"]} />
                      <ProductCategory title="Swing" items={["Double Person Swing", "Elephant Swing", "Happy Swing", "Rabbit Swing"]} />
                    </div>
                  </div>
                )}

                {/* Page 10: Outdoor Fitness */}
                {currentPage === 10 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold mb-2">Outdoor Fitness</h1>
                      <p className="text-xl opacity-90">50+ Products</p>
                    </div>
                    <img src="https://user-gen-media-assets.s3.amazonaws.com/seedream_images/452cfe09-f054-490c-9191-f913b723a568.png" alt="Outdoor Fitness" className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg" />
                    <p className="text-lg text-gray-700 mb-6 p-4 bg-gray-50 rounded-lg border-l-4 border-[#00A9CE]">
                      Professional-grade outdoor fitness equipment promoting health and wellness for all ages. Transform public spaces into community fitness centers with durable, weatherproof equipment that encourages active lifestyles and social wellness.
                    </p>
                    
                    <div className="space-y-6">
                      <ProductCategory title="Cardiovascular Equipment" items={["Air Walker Single Person", "Sky Walker Single Person", "Sky Walker Double Person", "Elliptical Cross Trainer", "Exercise Bike"]} />
                      <ProductCategory title="Strength & Resistance" items={["Seated Chest Press - Double Person", "Leg Press Double Seater (Squat Pushing)", "Double Situp Station", "Back Extension", "Push Up Bar"]} />
                      <ProductCategory title="Flexibility & Balance" items={["Hip Twister - Triple Person", "Surf Board Double Person", "Outward Balancing Beam"]} />
                    </div>
                  </div>
                )}

                {/* Page 11: Quality Standards */}
                {currentPage === 11 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold">Product Quality & Standards</h1>
                    </div>
                    
                    <div className="space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-[#133458] mb-4 pb-2 border-b-2 border-[#00A9CE]">Our Commitments</h2>
                        <div className="space-y-3">
                          {["✓ Safety Certified - Meets international safety standards", "✓ Durability Tested - Built to withstand heavy use", "✓ Educationally Designed - Created with learning objectives", "✓ Environmentally Conscious - Sustainable materials when possible", "✓ Professionally Installed - Expert installation services available"].map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-[#133458]">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h2 className="text-2xl font-bold text-[#133458] mb-4 pb-2 border-b-2 border-[#00A9CE]">Premium Materials</h2>
                        <div className="space-y-3">
                          {[
                            { title: "FRP (Fiber Reinforced Plastic)", desc: "Weather-resistant, durable, colorfast" },
                            { title: "Stainless Steel (SS)", desc: "Corrosion-resistant, long-lasting" },
                            { title: "Cast Iron", desc: "Heavy-duty, stable, traditional" },
                            { title: "EVA Foam", desc: "Safe, cushioned, impact-absorbing" }
                          ].map((item, idx) => (
                            <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-[#133458]">
                              <strong>{item.title}</strong> - {item.desc}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Page 12: Contact */}
                {currentPage === 12 && (
                  <div>
                    <div className="bg-gradient-to-r from-[#133458] to-[#00A9CE] text-white p-8 -m-8 md:-m-12 mb-8 rounded-t-xl">
                      <h1 className="text-4xl font-bold">Contact & Services</h1>
                    </div>
                    
                    <div className="bg-[#133458] text-white p-8 rounded-xl mb-8 text-center">
                      <h3 className="text-3xl font-bold mb-6">Get In Touch</h3>
                      <p className="text-lg mb-3"><strong>Email:</strong> info@litlabs.agency</p>
                      <p className="text-lg mb-3"><strong>Website:</strong> www.litlabs.agency</p>
                      <p className="text-lg"><strong>Location:</strong> Bengaluru, India</p>
                    </div>

                    <div>
                      <h2 className="text-2xl font-bold text-[#133458] mb-4 pb-2 border-b-2 border-[#00A9CE]">Our Services</h2>
                      <div className="space-y-3">
                        {["Site assessment and planning", "Custom design consultation", "Professional installation", "Staff training programs", "Maintenance support", "Warranty coverage"].map((item, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-[#133458]">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between p-6 bg-gray-50 border-t-2 border-gray-200">
            <Button
              onClick={prevPage}
              disabled={currentPage === 1}
              className="bg-gradient-to-r from-[#133458] to-[#00A9CE] hover:opacity-90"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <div className="text-center">
              <span className="text-gray-600">Page </span>
              <span className="text-[#00A9CE] font-bold">{currentPage}</span>
              <span className="text-gray-600"> of </span>
              <span className="text-[#00A9CE] font-bold">{totalPages}</span>
            </div>
            
            <Button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className="bg-gradient-to-r from-[#133458] to-[#00A9CE] hover:opacity-90"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Helper component for product categories
const ProductCategory = ({ title, items }: { title: string; items: string[] }) => (
  <div className="bg-white p-5 rounded-lg border border-gray-200">
    <h3 className="text-xl font-bold text-[#133458] mb-4">{title}</h3>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {items.map((item, idx) => (
        <div key={idx} className="bg-gradient-to-r from-gray-50 to-gray-100 p-3 rounded-md border-l-3 border-[#00A9CE] text-sm hover:from-[#00A9CE] hover:to-[#133458] hover:text-white transition-all">
          {item}
        </div>
      ))}
    </div>
  </div>
);

export default Labs;
