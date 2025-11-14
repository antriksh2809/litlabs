import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Users, Award, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Foundations of AI & Robotics",
    level: "Beginner",
    grade: "Grades 1-2",
    duration: "12 weeks",
    description: "Introduction to basic concepts of artificial intelligence and robotics through playful activities",
    modules: 8,
    projects: 4,
    image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg"
  },
  {
    id: 2,
    title: "Programming Fundamentals",
    level: "Beginner",
    grade: "Grades 3-5",
    duration: "16 weeks",
    description: "Learn basic programming concepts using visual programming languages and simple robotics",
    modules: 12,
    projects: 6,
    image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg"
  },
  {
    id: 3,
    title: "Intermediate Robotics",
    level: "Intermediate",
    grade: "Grades 6-8",
    duration: "20 weeks",
    description: "Build and program more complex robots while learning about sensors and actuators",
    modules: 15,
    projects: 8,
    image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg"
  },
  {
    id: 4,
    title: "Advanced AI Applications",
    level: "Advanced",
    grade: "Grades 9-12",
    duration: "24 weeks",
    description: "Explore machine learning, computer vision, and advanced robotics applications",
    modules: 18,
    projects: 10,
    image: "/Learn Innovate Transform.png"
  }
];

export default function EducationCourses() {
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
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Courses</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Structured curriculum from Grade 1-12 aligned with NEP 2020 guidelines. 
              Each course builds upon the previous one to develop comprehensive STEM skills.
            </p>
          </div>
          
          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {courses.map((course) => (
              <div key={course.id} className="rounded-2xl border bg-card overflow-hidden hover-lift shadow-modern">
                <div className="aspect-video bg-gradient-to-br from-[#3BBBF0]/20 to-[#FF822E]/20 flex items-center justify-center">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="max-h-full max-w-full object-contain p-6"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#3BBBF0]/10 text-[#3BBBF0] rounded-full text-xs font-medium">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-[#FF822E]/10 text-[#FF822E] rounded-full text-xs font-medium">
                      {course.grade}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-[#3BBBF0]" />
                      <span className="text-sm">{course.modules} Modules</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-[#3BBBF0]" />
                      <span className="text-sm">{course.projects} Projects</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-[#3BBBF0]" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#FF822E] hover:bg-[#FF822E]/90">
                    View Curriculum
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Curriculum Framework */}
          <div className="bg-gradient-to-br from-[#3BBBF0]/5 to-[#FF822E]/5 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Curriculum Framework</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#3BBBF0]/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-[#3BBBF0]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experiential Learning</h3>
                <p className="text-muted-foreground">
                  Hands-on activities that promote active engagement and deeper understanding
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#3BBBF0]/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-[#3BBBF0]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Progressive Skill Building</h3>
                <p className="text-muted-foreground">
                  Structured approach that builds complexity as students advance through grade levels
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#3BBBF0]/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-[#3BBBF0]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">NEP 2020 Alignment</h3>
                <p className="text-muted-foreground">
                  Curriculum designed to meet the goals of the National Education Policy
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-[#3BBBF0] to-[#FF822E] text-white rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Access our complete course catalog and implementation guides for your school
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-[#3BBBF0] hover:bg-gray-100">
                Download Catalog
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}