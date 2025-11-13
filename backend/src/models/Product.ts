import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  category: 'robotics' | 'ai' | 'coding' | 'electronics' | 'science' | 'other';
  ageGroup: {
    min: number;
    max: number;
  };
  images: string[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    maxlength: [100, 'Product name cannot exceed 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Product description is required'],
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  shortDescription: {
    type: String,
    required: [true, 'Short description is required'],
    maxlength: [200, 'Short description cannot exceed 200 characters']
  },
  price: {
    type: Number,
    required: [true, 'Product price is required'],
    min: [0, 'Price cannot be negative']
  },
  originalPrice: {
    type: Number,
    min: [0, 'Original price cannot be negative']
  },
  category: {
    type: String,
    required: [true, 'Product category is required'],
    enum: ['robotics', 'ai', 'coding', 'electronics', 'science', 'other']
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
  images: [{
    type: String,
    required: [true, 'At least one image is required']
  }],
  features: [{
    type: String,
    required: true
  }],
  specifications: {
    type: Map,
    of: String
  },
  inStock: {
    type: Boolean,
    default: true
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: [0, 'Stock quantity cannot be negative']
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

// Index for better search performance
ProductSchema.index({ name: 'text', description: 'text', tags: 'text' });
ProductSchema.index({ category: 1, isActive: 1 });
ProductSchema.index({ isFeatured: 1, isActive: 1 });

export default mongoose.model<IProduct>('Product', ProductSchema);
