import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Bot, Wrench, Users, CheckCircle, ArrowLeft, BookOpen, Video, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParams } from "react-router-dom";

// Mock program data - in a real app this would come from an API
const programs = [
  {
    id: 1,
    title: "AI & Robotics Lab",
    slug: "ai-robotics-lab",
    icon: <Bot className="h-8 w-8" />,
    summary: "Turn classrooms into innovation hubs with kits, curriculum, and training",
    description: `
      <p>Our AI & Robotics Lab solution transforms traditional classrooms into dynamic innovation hubs where students can explore cutting-edge technology through hands-on learning. This comprehensive program includes everything your school needs to establish a world-class STEM learning environment.</p>
      
      <h2>Complete Ecosystem</h2>
      <p>The program provides a complete ecosystem that includes:</p>
      <ul>
        <li>State-of-the-art robotics and AI hardware kits</li>
        <li>Comprehensive curriculum aligned with NEP 2020 guidelines</li>
        <li>Teacher training and certification programs</li>
        <li>Ongoing technical support and maintenance</li>
        <li>Student assessment and progress tracking tools</li>
      </ul>
      
      <h2>Curriculum Overview</h2>
      <p>Our curriculum is designed to progressively build student skills:</p>
      <h3>Foundation Level (Grades 6-8)</h3>
      <ul>
        <li>Introduction to programming concepts</li>
        <li>Basic robotics and sensor integration</li>
        <li>Simple automation projects</li>
      </ul>
      
      <h3>Advanced Level (Grades 9-12)</h3>
      <ul>
        <li>Machine learning and AI fundamentals</li>
        <li>Complex robotics challenges</li>
        <li>Capstone innovation projects</li>
      </ul>
    `,
    features: [
      "Complete lab infrastructure setup",
      "100+ projects curriculum",
      "Teacher training & certification",
      "Ongoing technical support",
      "NEP-aligned lesson plans",
      "Student assessment tools"
    ],
    outcomes: ["Hands-on project experience", "Critical thinking development", "NEP curriculum alignment"],
    image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg",
    video: "/placeholder-video.mp4"
  },
  {
    id: 2,
    title: "Atal Tinkering Lab",
    slug: "atl",
    icon: <Wrench className="h-8 w-8" />,
    summary: "ATL-compliant solution with complete equipment, training & mentorship",
    description: `
      <p>Our Atal Tinkering Lab (ATL) solution is fully compliant with Atal Innovation Mission guidelines, providing schools with everything needed to foster a culture of innovation and entrepreneurship among students.</p>
      
      <h2>ATL Compliance</h2>
      <p>Our solution meets all ATL requirements:</p>
      <ul>
        <li>Minimum 1,500 sq. ft. dedicated space optimization</li>
        <li>Equipment across six domains as per AIM guidelines</li>
        <li>Trained mentor for continuous guidance</li>
        <li>Regular activities and competitions participation</li>
      </ul>
      
      <h2>Equipment Domains</h2>
      <p>The lab includes equipment across these key domains:</p>
      <h3>Electronics Development</h3>
      <ul>
        <li>Microcontroller boards and development kits</li>
        <li>Sensors and actuators library</li>
        <li>Electronic testing and measurement tools</li>
      </ul>
      
      <h3>Mechanical Systems</h3>
      <ul>
        <li>3D printers and design software</li>
        <li>Mechanical construction kits</li>
        <li>Tools for prototyping and fabrication</li>
      </ul>
      
      <h3>Physical Computing</h3>
      <ul>
        <li>Robotics platforms and controllers</li>
        <li>Programming environments for different skill levels</li>
        <li>Integration components for complex projects</li>
      </ul>
    `,
    features: [
      "ATL-compliant equipment",
      "DIY kits & materials",
      "Mentor training programs",
      "Competition support",
      "Regular workshops",
      "Innovation tracking"
    ],
    outcomes: ["Government compliance", "Student innovation", "National recognition"],
    image: "/Learn Innovate Transform.png",
    video: "/placeholder-video.mp4"
  },
  {
    id: 3,
    title: "Implementation Support",
    slug: "implementation",
    icon: <Users className="h-8 w-8" />,
    summary: "End-to-end support from setup to execution",
    description: `
      <p>Our Implementation Support program ensures smooth deployment and sustained success of your STEM initiatives. We provide comprehensive assistance throughout the entire process, from initial setup to ongoing operations.</p>
      
      <h2>Teacher Training</h2>
      <p>Our training programs are designed to build teacher confidence:</p>
      <ul>
        <li>Hands-on workshops for practical skills development</li>
        <li>Online resources and continuous learning modules</li>
        <li>Certification programs for professional development</li>
        <li>Peer learning communities for knowledge sharing</li>
      </ul>
      
      <h2>Curriculum Integration</h2>
      <p>We help seamlessly integrate STEM learning into existing curriculum:</p>
      <ul>
        <li>Mapping to subject learning outcomes</li>
        <li>Cross-curricular project ideas</li>
        <li>Assessment strategies for experiential learning</li>
        <li>Resource alignment with textbook content</li>
      </ul>
      
      <h2>Ongoing Support</h2>
      <p>Continuous support ensures long-term success:</p>
      <ul>
        <li>Annual maintenance contracts for equipment</li>
        <li>Regular upskilling sessions for teachers</li>
        <li>Technical helpdesk for troubleshooting</li>
        <li>Performance analytics and improvement recommendations</li>
      </ul>
    `,
    features: [
      "Teacher training workshops",
      "Curriculum integration",
      "Annual maintenance contract",
      "Regular upskilling sessions",
      "Technical helpdesk",
      "Performance analytics"
    ],
    outcomes: ["Smooth deployment", "Teacher confidence", "Sustained engagement"],
    image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg",
    video: "/placeholder-video.mp4"
  }
];

export default function ProgramDetail() {
  const { slug } = useParams();
  
  // Find the program by slug
  const program = programs.find(p => p.slug === slug) || programs[0];
  
  // Log for debugging
  console.log("Program slug:", slug);
  console.log("Found program:", program);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Back Link */}
          <a 
            href="/programs" 
            className="inline-flex items-center gap-2 text-[#3BBBF0] hover:text-[#3BBBF0]/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Programs
          </a>
          
          {/* Program Header */}
          <div className="bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 rounded-2xl p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#3BBBF0]/20 to-[#FF822E]/20 flex items-center justify-center">
                <div className="text-[#3BBBF0]">{program.icon}</div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{program.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{program.summary}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button size="lg" className="bg-[#FF822E] hover:bg-[#FF822E]/90">
                    Get a Quote
                  </Button>
                  <Button size="lg" variant="outline" className="border-[#3BBBF0] text-[#3BBBF0] hover:bg-[#3BBBF0] hover:text-white">
                    Schedule Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <section className="mb-12">
                <article 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: program.description }}
                />
              </section>
              
              {/* Features */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Program Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {program.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#3BBBF0] flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
              
              {/* Media */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Program Overview</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 rounded-xl aspect-video flex items-center justify-center">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="max-h-full max-w-full object-contain p-4"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-[#3BBBF0]/10 to-[#FF822E]/10 rounded-xl aspect-video flex flex-col items-center justify-center p-8 text-center">
                    <Video className="h-12 w-12 text-[#3BBBF0] mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Watch Overview Video</h3>
                    <p className="text-muted-foreground mb-4">See how schools are implementing this program</p>
                    <Button variant="outline" className="border-[#3BBBF0] text-[#3BBBF0] hover:bg-[#3BBBF0] hover:text-white">
                      Play Video
                    </Button>
                  </div>
                </div>
              </section>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Outcomes */}
              <div className="bg-gradient-to-br from-[#3BBBF0]/5 to-[#FF822E]/5 rounded-2xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-[#3BBBF0]" />
                  Learning Outcomes
                </h3>
                <ul className="space-y-3">
                  {program.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-[#3BBBF0] mt-2 flex-shrink-0"></div>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Resources */}
              <div className="bg-card border rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-[#3BBBF0]" />
                  Resources
                </h3>
                <div className="space-y-3">
                  <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="font-medium">Curriculum Guide</div>
                    <div className="text-sm text-muted-foreground">PDF, 2.4 MB</div>
                  </a>
                  <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="font-medium">Implementation Checklist</div>
                    <div className="text-sm text-muted-foreground">PDF, 1.1 MB</div>
                  </a>
                  <a href="#" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <div className="font-medium">Teacher Handbook</div>
                    <div className="text-sm text-muted-foreground">PDF, 3.7 MB</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}