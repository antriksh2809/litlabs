import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product';
import Program from '../models/Program';
import Book from '../models/Book';
import User from '../models/User';

dotenv.config();

const sampleProducts = [
  {
    name: "Arduino Starter Kit",
    description: "Complete Arduino starter kit perfect for beginners to learn electronics and programming. Includes Arduino Uno, breadboard, LEDs, resistors, and comprehensive tutorials.",
    shortDescription: "Complete Arduino kit for electronics beginners",
    price: 2999,
    originalPrice: 3999,
    category: "electronics",
    ageGroup: { min: 10, max: 16 },
    images: ["https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=Arduino+Kit"],
    features: [
      "Arduino Uno R3 board",
      "Breadboard and jumper wires",
      "LEDs and resistors",
      "Step-by-step tutorials",
      "Project examples"
    ],
    specifications: {
      "Board": "Arduino Uno R3",
      "Microcontroller": "ATmega328P",
      "Operating Voltage": "5V",
      "Digital I/O Pins": "14",
      "Analog Input Pins": "6"
    },
    inStock: true,
    stockQuantity: 50,
    tags: ["arduino", "electronics", "programming", "beginner"],
    rating: 4.5,
    reviewCount: 23,
    isFeatured: true
  },
  {
    name: "LEGO Mindstorms EV3",
    description: "Advanced robotics kit that combines LEGO building with programming. Perfect for learning robotics, engineering, and problem-solving skills.",
    shortDescription: "Advanced robotics kit with LEGO building",
    price: 15999,
    originalPrice: 18999,
    category: "robotics",
    ageGroup: { min: 10, max: 18 },
    images: ["https://via.placeholder.com/400x300/DC2626/FFFFFF?text=LEGO+Mindstorms"],
    features: [
      "EV3 Intelligent Brick",
      "3 Interactive Servo Motors",
      "Color, Touch, and Ultrasonic Sensors",
      "LEGO Technic building elements",
      "Drag-and-drop programming software"
    ],
    specifications: {
      "Processor": "ARM9 300MHz",
      "Memory": "16MB Flash, 64MB RAM",
      "Display": "178x128 pixel LCD",
      "Connectivity": "USB, Bluetooth, WiFi",
      "Battery": "Rechargeable Li-ion"
    },
    inStock: true,
    stockQuantity: 25,
    tags: ["lego", "robotics", "programming", "engineering"],
    rating: 4.8,
    reviewCount: 45,
    isFeatured: true
  },
  {
    name: "Raspberry Pi 4 Model B",
    description: "Latest Raspberry Pi single-board computer perfect for learning programming, IoT projects, and building smart devices.",
    shortDescription: "Latest Raspberry Pi for programming and IoT",
    price: 4999,
    originalPrice: 5999,
    category: "coding",
    ageGroup: { min: 12, max: 18 },
    images: ["https://via.placeholder.com/400x300/059669/FFFFFF?text=Raspberry+Pi+4"],
    features: [
      "4GB RAM",
      "Quad-core ARM Cortex-A72",
      "Dual-band WiFi and Bluetooth",
      "4K video support",
      "GPIO pins for electronics"
    ],
    specifications: {
      "Processor": "Broadcom BCM2711",
      "RAM": "4GB LPDDR4",
      "Storage": "MicroSD card slot",
      "Connectivity": "WiFi 802.11ac, Bluetooth 5.0",
      "Ports": "2x USB 3.0, 2x USB 2.0, HDMI"
    },
    inStock: true,
    stockQuantity: 30,
    tags: ["raspberry-pi", "programming", "iot", "linux"],
    rating: 4.7,
    reviewCount: 67,
    isFeatured: true
  }
];

const samplePrograms = [
  {
    title: "Introduction to Robotics",
    description: "Learn the fundamentals of robotics through hands-on projects. Students will build and program robots while understanding mechanical engineering concepts.",
    shortDescription: "Learn robotics fundamentals with hands-on projects",
    category: "robotics",
    level: "beginner",
    duration: { weeks: 8, hoursPerWeek: 2 },
    ageGroup: { min: 10, max: 14 },
    price: 4999,
    originalPrice: 5999,
    images: ["https://via.placeholder.com/400x300/7C3AED/FFFFFF?text=Robotics+Program"],
    curriculum: [
      {
        week: 1,
        title: "Introduction to Robotics",
        description: "Understanding what robots are and their applications",
        topics: ["Robot definition", "Types of robots", "Real-world applications"]
      },
      {
        week: 2,
        title: "Basic Mechanics",
        description: "Learning about gears, motors, and mechanical systems",
        topics: ["Gear systems", "Motor types", "Mechanical advantage"]
      }
    ],
    prerequisites: ["Basic computer skills", "Interest in building things"],
    learningOutcomes: [
      "Understand basic robotics concepts",
      "Build and program simple robots",
      "Apply mechanical engineering principles"
    ],
    materials: ["LEGO Mindstorms kit", "Laptop", "Notebook"],
    instructor: {
      name: "Dr. Sarah Johnson",
      bio: "Robotics engineer with 10+ years of experience in education",
      image: "https://via.placeholder.com/150x150/6366F1/FFFFFF?text=SJ",
      qualifications: ["PhD in Robotics", "Certified STEM Educator", "Former NASA Engineer"]
    },
    schedule: {
      startDate: new Date("2024-02-01"),
      endDate: new Date("2024-03-28"),
      days: ["Saturday", "Sunday"],
      time: "10:00 AM - 12:00 PM",
      timezone: "IST"
    },
    maxStudents: 20,
    enrolledStudents: 15,
    isOnline: false,
    location: "L.I.T. LABS Learning Center, Mumbai",
    isFeatured: true,
    tags: ["robotics", "beginner", "hands-on", "mechanics"],
    rating: 4.6,
    reviewCount: 12
  },
  {
    title: "AI and Machine Learning for Kids",
    description: "Explore the fascinating world of artificial intelligence through fun projects and games. Learn how AI works and create your own AI applications.",
    shortDescription: "Explore AI through fun projects and games",
    category: "ai",
    level: "intermediate",
    duration: { weeks: 12, hoursPerWeek: 3 },
    ageGroup: { min: 12, max: 16 },
    price: 7999,
    originalPrice: 9999,
    images: ["https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=AI+Program"],
    curriculum: [
      {
        week: 1,
        title: "What is AI?",
        description: "Introduction to artificial intelligence concepts",
        topics: ["AI definition", "Types of AI", "AI in daily life"]
      },
      {
        week: 2,
        title: "Machine Learning Basics",
        description: "Understanding how machines learn",
        topics: ["Supervised learning", "Unsupervised learning", "Neural networks"]
      }
    ],
    prerequisites: ["Basic programming knowledge", "Mathematics up to grade 8"],
    learningOutcomes: [
      "Understand AI and ML concepts",
      "Create simple AI applications",
      "Use AI tools and platforms"
    ],
    materials: ["Laptop", "Python software", "AI development tools"],
    instructor: {
      name: "Prof. Michael Chen",
      bio: "AI researcher and educator specializing in youth AI education",
      image: "https://via.placeholder.com/150x150/10B981/FFFFFF?text=MC",
      qualifications: ["PhD in Computer Science", "AI Research Fellow", "Google AI Educator"]
    },
    schedule: {
      startDate: new Date("2024-02-15"),
      endDate: new Date("2024-05-15"),
      days: ["Wednesday", "Friday"],
      time: "4:00 PM - 6:00 PM",
      timezone: "IST"
    },
    maxStudents: 15,
    enrolledStudents: 12,
    isOnline: true,
    isFeatured: true,
    tags: ["ai", "machine-learning", "python", "intermediate"],
    rating: 4.8,
    reviewCount: 8
  }
];

const sampleBooks = [
  {
    title: "Coding for Kids: Python",
    description: "A comprehensive guide to learning Python programming designed specifically for children. Includes fun projects and interactive exercises.",
    shortDescription: "Learn Python programming with fun projects",
    author: "Adrienne Tacke",
    isbn: "978-1641521758",
    category: "coding",
    level: "beginner",
    ageGroup: { min: 8, max: 14 },
    price: 1299,
    originalPrice: 1599,
    pages: 232,
    language: "English",
    publisher: "Rockridge Press",
    publishedDate: new Date("2019-03-19"),
    coverImage: "https://via.placeholder.com/300x400/3B82F6/FFFFFF?text=Python+Book",
    samplePages: ["https://via.placeholder.com/200x300/3B82F6/FFFFFF?text=Page+1"],
    format: "paperback",
    isAvailable: true,
    stockQuantity: 100,
    features: [
      "Step-by-step instructions",
      "Fun coding projects",
      "Colorful illustrations",
      "Interactive exercises",
      "Parent-friendly guide"
    ],
    tableOfContents: [
      { chapter: 1, title: "Getting Started with Python", pageNumber: 1 },
      { chapter: 2, title: "Variables and Data Types", pageNumber: 25 },
      { chapter: 3, title: "Making Decisions", pageNumber: 45 }
    ],
    tags: ["python", "programming", "kids", "beginner"],
    rating: 4.5,
    reviewCount: 156,
    isFeatured: true
  },
  {
    title: "The LEGO MINDSTORMS EV3 Discovery Book",
    description: "Complete guide to building and programming robots with LEGO MINDSTORMS EV3. Perfect for both beginners and advanced users.",
    shortDescription: "Complete guide to LEGO MINDSTORMS EV3",
    author: "Laurens Valk",
    isbn: "978-1593275327",
    category: "robotics",
    level: "intermediate",
    ageGroup: { min: 10, max: 18 },
    price: 1999,
    originalPrice: 2499,
    pages: 396,
    language: "English",
    publisher: "No Starch Press",
    publishedDate: new Date("2014-06-14"),
    coverImage: "https://via.placeholder.com/300x400/DC2626/FFFFFF?text=LEGO+Book",
    samplePages: ["https://via.placeholder.com/200x300/DC2626/FFFFFF?text=Page+1"],
    format: "paperback",
    isAvailable: true,
    stockQuantity: 75,
    features: [
      "Detailed building instructions",
      "Programming tutorials",
      "Advanced robot designs",
      "Troubleshooting guide",
      "Online resources"
    ],
    tableOfContents: [
      { chapter: 1, title: "Introduction to LEGO MINDSTORMS", pageNumber: 1 },
      { chapter: 2, title: "Building Your First Robot", pageNumber: 35 },
      { chapter: 3, title: "Programming Basics", pageNumber: 67 }
    ],
    tags: ["lego", "mindstorms", "robotics", "programming"],
    rating: 4.7,
    reviewCount: 89,
    isFeatured: true
  }
];

const sampleUsers = [
  {
    name: "Admin User",
    email: "admin@litlabs.com",
    password: "admin123",
    role: "admin",
    preferences: {
      notifications: true,
      newsletter: true,
      theme: "light"
    }
  }
];

export const seedDatabase = async () => {
  try {
    console.log('🌱 Starting database seeding...');

    // Clear existing data
    await Product.deleteMany({});
    await Program.deleteMany({});
    await Book.deleteMany({});
    await User.deleteMany({});

    // Insert sample data
    await Product.insertMany(sampleProducts);
    console.log('✅ Products seeded successfully');

    await Program.insertMany(samplePrograms);
    console.log('✅ Programs seeded successfully');

    await Book.insertMany(sampleBooks);
    console.log('✅ Books seeded successfully');

    await User.insertMany(sampleUsers);
    console.log('✅ Users seeded successfully');

    console.log('🎉 Database seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    throw error;
  }
};

// Run seeding if this file is executed directly
if (require.main === module) {
  const connectDB = async () => {
    try {
      const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lit-labs';
      await mongoose.connect(mongoURI);
      console.log('✅ MongoDB connected for seeding');
    } catch (error) {
      console.error('❌ MongoDB connection error:', error);
      process.exit(1);
    }
  };

  const runSeed = async () => {
    await connectDB();
    await seedDatabase();
    await mongoose.connection.close();
    console.log('📦 Database connection closed');
    process.exit(0);
  };

  runSeed();
}
