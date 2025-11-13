import mongoose, { Document, Schema } from 'mongoose';

export interface IProgram extends Document {
  title: string;
  description: string;
  shortDescription: string;
  category: 'robotics' | 'ai' | 'coding' | 'electronics' | 'science' | 'workshop' | 'camp';
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: {
    weeks: number;
    hoursPerWeek: number;
  };
  ageGroup: {
    min: number;
    max: number;
  };
  price: number;
  originalPrice?: number;
  images: string[];
  curriculum: {
    week: number;
    title: string;
    description: string;
    topics: string[];
  }[];
  prerequisites: string[];
  learningOutcomes: string[];
  materials: string[];
  instructor: {
    name: string;
    bio: string;
    image: string;
    qualifications: string[];
  };
  schedule: {
    startDate: Date;
    endDate: Date;
    days: string[];
    time: string;
    timezone: string;
  };
  maxStudents: number;
  enrolledStudents: number;
  isOnline: boolean;
  location?: string;
  isActive: boolean;
  isFeatured: boolean;
  tags: string[];
  rating: number;
  reviewCount: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProgramSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Program title is required'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Program description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  category: {
    type: String,
    required: [true, 'Program category is required'],
    enum: ['robotics', 'ai', 'coding', 'electronics', 'science', 'workshop', 'camp']
  },
  level: {
    type: String,
    required: [true, 'Program level is required'],
    enum: ['beginner', 'intermediate', 'advanced']
  },
  duration: {
    weeks: {
      type: Number,
      required: [true, 'Duration in weeks is required'],
      min: [1, 'Duration must be at least 1 week']
    },
    hoursPerWeek: {
      type: Number,
      required: [true, 'Hours per week is required'],
      min: [1, 'Must be at least 1 hour per week']
    }
  },
  ageGroup: {
    min: {
      type: Number,
      required: [true, 'Minimum age is required'],
      min: [3, 'Minimum age must be at least 3']
    },
    max: {
      type: Number,
      required: [true, 'Maximum age is required'],
      max: [18, 'Maximum age must be at most 18']
    }
  },
  price: {
    type: Number,
    required: [true, 'Program price is required'],
    min: [0, 'Price cannot be negative']
  },
  originalPrice: {
    type: Number,
    min: [0, 'Original price cannot be negative']
  },
  images: [{
    type: String,
    required: [true, 'At least one image is required']
  }],
  curriculum: [{
    week: {
      type: Number,
      required: true,
      min: [1, 'Week number must be at least 1']
    },
    title: {
      type: String,
      required: true,
      maxlength: [100, 'Week title cannot exceed 100 characters']
    },
    description: {
      type: String,
      required: true,
      maxlength: [500, 'Week description cannot exceed 500 characters']
    },
    topics: [{
      type: String,
      required: true
    }]
  }],
  prerequisites: [{
    type: String,
    required: true
  }],
  learningOutcomes: [{
    type: String,
    required: true
  }],
  materials: [{
    type: String,
    required: true
  }],
  instructor: {
    name: {
      type: String,
      required: [true, 'Instructor name is required'],
      maxlength: [50, 'Instructor name cannot exceed 50 characters']
    },
    bio: {
      type: String,
      required: [true, 'Instructor bio is required'],
      maxlength: [500, 'Bio cannot exceed 500 characters']
    },
    image: {
      type: String,
      required: [true, 'Instructor image is required']
    },
    qualifications: [{
      type: String,
      required: true
    }]
  },
  schedule: {
    startDate: {
      type: Date,
      required: [true, 'Start date is required']
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required']
    },
    days: [{
      type: String,
      enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      required: true
    }],
    time: {
      type: String,
      required: [true, 'Class time is required']
    },
    timezone: {
      type: String,
      required: [true, 'Timezone is required'],
      default: 'UTC'
    }
  },
  maxStudents: {
    type: Number,
    required: [true, 'Maximum students is required'],
    min: [1, 'Must allow at least 1 student']
  },
  enrolledStudents: {
    type: Number,
    default: 0,
    min: [0, 'Enrolled students cannot be negative']
  },
  isOnline: {
    type: Boolean,
    default: false
  },
  location: {
    type: String,
    maxlength: [200, 'Location cannot exceed 200 characters']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String,
    trim: true
  }],
  rating: {
    type: Number,
    default: 0,
    min: [0, 'Rating cannot be less than 0'],
    max: [5, 'Rating cannot be more than 5']
  },
  reviewCount: {
    type: Number,
    default: 0,
    min: [0, 'Review count cannot be negative']
  }
}, {
  timestamps: true
});

// Indexes for better search performance
ProgramSchema.index({ title: 'text', description: 'text', tags: 'text' });
ProgramSchema.index({ category: 1, level: 1, isActive: 1 });
ProgramSchema.index({ isFeatured: 1, isActive: 1 });
ProgramSchema.index({ 'schedule.startDate': 1, 'schedule.endDate': 1 });

export default mongoose.model<IProgram>('Program', ProgramSchema);
