import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { useParams } from "react-router-dom";

// Mock blog post data - in a real app this would come from an API
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
    image: "/WhatsApp Image 2025-11-01 at 00.24.00.jpeg",
    content: `
      <p>In today's rapidly evolving educational landscape, schools are constantly seeking innovative ways to engage students and prepare them for the future. AI & Robotics labs have emerged as powerful tools that transform traditional classrooms into dynamic learning environments.</p>
      
      <h2>Why AI & Robotics Labs Matter</h2>
      <p>These labs provide hands-on experience with cutting-edge technology, allowing students to understand complex concepts through practical application. Unlike traditional teaching methods, students can see immediate results of their work, which significantly boosts engagement and retention.</p>
      
      <h2>Key Benefits for Schools</h2>
      <ul>
        <li><strong>Enhanced Learning:</strong> Students grasp abstract concepts faster through tangible projects</li>
        <li><strong>Skill Development:</strong> Critical thinking, problem-solving, and creativity are naturally fostered</li>
        <li><strong>Future Readiness:</strong> Exposure to AI and robotics prepares students for emerging career fields</li>
        <li><strong>NEP 2020 Alignment:</strong> Supports experiential learning and multidisciplinary approach</li>
      </ul>
      
      <h2>Implementation Success Story</h2>
      <p>Greenwood High International School implemented our AI & Robotics lab solution in 2023. Within six months, they reported a 40% increase in student engagement in STEM subjects and a 25% improvement in project-based assessment scores.</p>
      
      <p>Their science coordinator noted: "Students who previously struggled with theoretical concepts are now leading group projects and demonstrating deep understanding through their robot designs."</p>
      
      <h2>Getting Started</h2>
      <p>Setting up an AI & Robotics lab doesn't have to be overwhelming. Our plug-and-play solutions include everything from hardware kits to comprehensive curriculum, teacher training, and ongoing support.</p>
      
      <p>Ready to transform your school's approach to STEM education? <a href="/contact">Contact us</a> to schedule a demo and see how our labs can benefit your students.</p>
    `
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
    image: "/WhatsApp Image 2025-11-01 at 00.32.32.jpeg",
    content: `
      <p>The National Education Policy 2020 emphasizes experiential learning as a cornerstone of effective education. This approach moves away from rote memorization towards active engagement with concepts through doing, experimenting, and creating.</p>
      
      <h2>Understanding Experiential Learning</h2>
      <p>Experiential learning involves four key stages:</p>
      <ol>
        <li><strong>Concrete Experience:</strong> Direct involvement in a new experience</li>
        <li><strong>Reflective Observation:</strong> Reflection on the experience</li>
        <li><strong>Abstract Conceptualization:</strong> Formation of theories based on reflection</li>
        <li><strong>Active Experimentation:</strong> Testing theories in new situations</li>
      </ol>
      
      <h2>Robotics as an Experiential Tool</h2>
      <p>Robotics kits perfectly embody this cycle. Students build robots (concrete experience), observe their behavior (reflective observation), understand underlying principles (abstract conceptualization), and modify their designs (active experimentation).</p>
      
      <h2>Classroom Implementation Strategies</h2>
      <p>Teachers can integrate robotics into existing curriculum by:</p>
      <ul>
        <li>Starting with simple challenges that align with current topics</li>
        <li>Encouraging collaborative problem-solving</li>
        <li>Facilitating reflection sessions after each activity</li>
        <li>Connecting projects to real-world applications</li>
      </ul>
      
      <h2>Measuring Success</h2>
      <p>Beyond test scores, look for indicators like increased participation, improved collaboration skills, and students' ability to explain concepts in their own words. Our assessment tools help track both technical progress and soft skill development.</p>
    `
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
    image: "/WhatsApp Image 2025-11-01 at 00.32.33.jpeg",
    content: `
      <p>Meet Priya, a Grade 10 student from Delhi Public School who transformed her family's living space with an AI-powered smart home system built using our L.I.T. AI Tinker Kit.</p>
      
      <h2>The Challenge</h2>
      <p>Priya wanted to create a system that could automatically control lights, fans, and temperature based on occupancy and time of day. She was inspired by her grandmother, who often forgot to switch off appliances, leading to higher electricity bills.</p>
      
      <h2>The Solution</h2>
      <p>Using sensors, microcontrollers, and our AI learning platform, Priya built a system that:</p>
      <ul>
        <li>Detects occupancy in rooms using motion sensors</li>
        <li>Automatically switches off appliances when rooms are empty</li>
        <li>Adjusts fan speed based on room temperature</li>
        <li>Sends notifications to family members about energy consumption</li>
      </ul>
      
      <h2>Learning Outcomes</h2>
      <p>Through this project, Priya learned about:</p>
      <ul>
        <li>Programming logic and conditional statements</li>
        <li>Working with different types of sensors</li>
        <li>Data collection and analysis</li>
        <li>User interface design for mobile apps</li>
      </ul>
      
      <h2>Recognition</h2>
      <p>Priya's project won first prize at her school's annual science exhibition and was selected for the regional CBSE Innovation Fair. She's now mentoring younger students and planning to develop a version that integrates with solar power systems.</p>
      
      <p>"The L.I.T. kit made it so easy to bring my ideas to life," Priya says. "I could focus on solving the problem rather than worrying about the technical setup."</p>
    `
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
    image: "/Learn Innovate Transform.png",
    content: `
      <p>Atal Tinkering Labs (ATL) are innovation spaces that nurture young minds to become problem solvers and innovators. Here's a comprehensive guide to setting up an ATL-compliant lab with our solutions.</p>
      
      <h2>Understanding ATL Requirements</h2>
      <p>The Atal Innovation Mission outlines specific requirements for ATLs:</p>
      <ul>
        <li>Minimum 1,500 sq. ft. dedicated space</li>
        <li>Equipment across domains like electronics, mechanics, and digital fabrication</li>
        <li>Trained mentor for guidance</li>
        <li>Regular activities and competitions</li>
      </ul>
      
      <h2>Our ATL Solution</h2>
      <p>Our ATL-compliant package includes:</p>
      <h3>Hardware Components</h3>
      <ul>
        <li>3D printers and design tools</li>
        <li>Electronics workbench with components</li>
        <li>Robotics and AI kits</li>
        <li>Sensors and actuators library</li>
        <li>Computers with specialized software</li>
      </ul>
      
      <h3>Curriculum & Resources</h3>
      <ul>
        <li>60+ hours of activity modules</li>
        <li>Teacher training program</li>
        <li>Student project guides</li>
        <li>Assessment tools</li>
      </ul>
      
      <h2>Implementation Timeline</h2>
      <p>A typical ATL setup takes 8-12 weeks:</p>
      <ol>
        <li><strong>Week 1-2:</strong> Space assessment and planning</li>
        <li><strong>Week 3-4:</strong> Equipment delivery and installation</li>
        <li><strong>Week 5-6:</strong> Teacher training workshops</li>
        <li><strong>Week 7-8:</strong> Student orientation and first projects</li>
        <li><strong>Week 9+:</strong> Regular activities and mentorship</li>
      </ol>
      
      <h2>Success Metrics</h2>
      <p>Track success through:</p>
      <ul>
        <li>Student engagement levels</li>
        <li>Number of projects completed</li>
        <li>Participation in competitions</li>
        <li>Student feedback and confidence levels</li>
      </ul>
    `
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
    image: "/WhatsApp Image 2025-10-28 at 21.10.23.jpeg",
    content: `
      <p>Our 5-day AI bootcamp transforms curious students into confident creators. Here's what participants experience during this intensive learning journey.</p>
      
      <h2>Day 1: Foundations of AI</h2>
      <p>Students begin with understanding what AI is and isn't. We cover:</p>
      <ul>
        <li>Basic machine learning concepts</li>
        <li>Types of AI (supervised, unsupervised, reinforcement)</li>
        <li>Ethics in AI development</li>
      </ul>
      <p>Hands-on activity: Create a simple chatbot using rule-based logic</p>
      
      <h2>Day 2: Computer Vision Basics</h2>
      <p>Introduction to how computers "see" and interpret images:</p>
      <ul>
        <li>Image processing fundamentals</li>
        <li>Object detection principles</li>
        <li>Using pre-trained models</li>
      </ul>
      <p>Project: Build a system that can identify different types of waste for recycling</p>
      
      <h2>Day 3: Machine Learning in Action</h2>
      <p>Students work with real datasets to train models:</p>
      <ul>
        <li>Data preprocessing techniques</li>
        <li>Training and testing models</li>
        <li>Evaluating model performance</li>
      </ul>
      <p>Project: Predict house prices based on features using regression</p>
      
      <h2>Day 4: Robotics Integration</h2>
      <p>Connecting AI concepts with physical robots:</p>
      <ul>
        <li>Sensor integration with AI models</li>
        <li>Autonomous navigation basics</li>
        <li>Decision-making algorithms</li>
      </ul>
      <p>Project: Program a robot to navigate a maze using computer vision</p>
      
      <h2>Day 5: Capstone Projects</h2>
      <p>Students work in teams to solve real-world problems:</p>
      <ul>
        <li>Problem identification and solution design</li>
        <li>Prototype development</li>
        <li>Presentation and feedback</li>
      </ul>
      
      <h2>Student Outcomes</h2>
      <p>Participants leave with:</p>
      <ul>
        <li>Portfolio of 5 completed projects</li>
        <li>Certificate of completion</li>
        <li>Access to our online learning platform</li>
        <li>Confidence to pursue advanced AI topics</li>
      </ul>
    `
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
    image: "/ChatGPT Image Apr 30, 2025, 03_26_54 PM.png",
    content: `
      <p>CBSE's skill subject framework provides an excellent opportunity for schools to integrate modern technologies like robotics into their curriculum. Here's how AI & Robotics aligns with these requirements.</p>
      
      <h2>CBSE Skill Subject Overview</h2>
      <p>For grades 6-10, CBSE offers Information Technology (402) and Artificial Intelligence (417) as skill subjects. For grades 11-12, Computer Science (083) and Informatics Practices (065) are available.</p>
      
      <h2>Alignment with AI & Robotics</h2>
      <p>Our curriculum maps directly to CBSE learning outcomes:</p>
      
      <h3>Grades 6-8: Foundation Level</h3>
      <ul>
        <li><strong>IT 402:</strong> Problem-solving using computational thinking</li>
        <li><strong>Projects:</strong> Simple automation tasks using robotics kits</li>
        <li><strong>Skills:</strong> Logical reasoning, pattern recognition</li>
      </ul>
      
      <h3>Grades 9-10: Intermediate Level</h3>
      <ul>
        <li><strong>AI 417:</strong> Introduction to machine learning concepts</li>
        <li><strong>Projects:</strong> Data collection and basic prediction models</li>
        <li><strong>Skills:</strong> Data analysis, algorithm understanding</li>
      </ul>
      
      <h3>Grades 11-12: Advanced Level</h3>
      <ul>
        <li><strong>CS 083/IP 065:</strong> Complex AI applications and robotics</li>
        <li><strong>Projects:</strong> Autonomous systems, advanced data models</li>
        <li><strong>Skills:</strong> System design, optimization techniques</li>
      </ul>
      
      <h2>Assessment Alignment</h2>
      <p>Our evaluation methods align with CBSE's competency-based approach:</p>
      <ul>
        <li>Project-based assessments (40% weightage)</li>
        <li>Practical examinations (30% weightage)</li>
        <li>Theory components (30% weightage)</li>
      </ul>
      
      <h2>Implementation Support</h2>
      <p>We provide comprehensive support for CBSE schools:</p>
      <ul>
        <li>Curriculum mapping documents</li>
        <li>Sample question papers</li>
        <li>Teacher training aligned with CBSE guidelines</li>
        <li>Regular updates for syllabus changes</li>
      </ul>
    `
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === slug) || blogPosts[0];
  
  // Log for debugging
  console.log("Blog post slug:", slug);
  console.log("Found post:", post);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Link */}
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 text-[#3BBBF0] hover:text-[#3BBBF0]/80 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </a>
          
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#3BBBF0]/10 text-[#3BBBF0] rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.date && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
              )}
              {post.readTime && (
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  {post.readTime} read
                </div>
              )}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {post.title}
            </h1>
            
            {post.author && (
              <div className="flex items-center gap-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="text-muted-foreground">By {post.author}</span>
              </div>
            )}
          </header>
          
          {/* Featured Image */}
          {post.image && (
            <div className="aspect-[16/9] bg-gradient-to-br from-[#3BBBF0]/20 to-[#FF822E]/20 rounded-2xl mb-8 flex items-center justify-center">
              <img 
                src={post.image} 
                alt={post.title} 
                className="max-h-full max-w-full object-contain p-8"
              />
            </div>
          )}
          
          {/* Post Content */}
          <article 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-wrap gap-2">
              {["AI", "Robotics", "Education", "STEM", "Innovation"].map((tag) => (
                <span 
                  key={tag} 
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}