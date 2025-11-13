import mongoose, { Document, Schema } from 'mongoose';

export interface IBook extends Document {
  title: string;
  author: string;
  description: string;
  shortDescription: string;
  isbn: string;
  category: 'robotics' | 'ai' | 'coding' | 'electronics' | 'science' | 'mathematics' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced';
  ageGroup: {
    min: number;
    max: number;
  };
  price: number;
  originalPrice?: number;
  pages: number;
  language: string;
  publisher: string;
  publishedDate: Date;
  coverImage: string;
  samplePages: string[];
  format: 'hardcover' | 'paperback' | 'ebook' | 'audiobook';
  isAvailable: boolean;
  stockQuantity: number;
  features: string[];
  tableOfContents: {
    chapter: number;
    title: string;
    pageNumber: number;
  }[];
  tags: string[];
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const BookSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
    maxlength: [100, 'Author name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Book description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  isbn: {
    type: String,
    required: [true, 'ISBN is required'],
    unique: true,
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Book category is required'],
    enum: ['robotics', 'ai', 'coding', 'electronics', 'science', 'mathematics', 'other']
  },
  level: {
    type: String,
    required: [true, 'Book level is required'],
    enum: ['beginner', 'intermediate', 'advanced']
  },
  ageGroup: {
    min: {
      type: Number,
      required: [true, 'Minimum age is required'],
      min: [3, 'Minimum age must be at least 3']
    },
    max: {
      type: Number,
      required: [true, 'Maximum age must be at most 18']
    }
  },
  price: {
    type: Number,
    required: [true, 'Book price is required'],
    min: [0, 'Price cannot be negative']
  },
  originalPrice: {
    type: Number,
    min: [0, 'Original price cannot be negative']
  },
  pages: {
    type: Number,
    required: [true, 'Number of pages is required'],
    min: [1, 'Must have at least 1 page']
  },
  language: {
    type: String,
    required: [true, 'Language is required'],
    default: 'English'
  },
  publisher: {
    type: String,
    required: [true, 'Publisher is required'],
    maxlength: [100, 'Publisher name cannot exceed 100 characters']
  },
  publishedDate: {
    type: Date,
    required: [true, 'Published date is required']
  },
  coverImage: {
    type: String,
    required: [true, 'Cover image is required']
  },
  samplePages: [{
    type: String
  }],
  format: {
    type: String,
    required: [true, 'Book format is required'],
    enum: ['hardcover', 'paperback', 'ebook', 'audiobook']
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: [0, 'Stock quantity cannot be negative']
  },
  features: [{
    type: String,
    required: true
  }],
  tableOfContents: [{
    chapter: {
      type: Number,
      required: true,
      min: [1, 'Chapter number must be at least 1']
    },
    title: {
      type: String,
      required: true,
      maxlength: [200, 'Chapter title cannot exceed 200 characters']
    },
    pageNumber: {
      type: Number,
      required: true,
      min: [1, 'Page number must be at least 1']
    }
  }],
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
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes for better search performance
BookSchema.index({ title: 'text', author: 'text', description: 'text', tags: 'text' });
BookSchema.index({ category: 1, level: 1, isActive: 1 });
BookSchema.index({ isFeatured: 1, isActive: 1 });
// BookSchema.index({ isbn: 1 });

export default mongoose.model<IBook>('Book', BookSchema);
