import axios from 'axios';
import { API_ENDPOINTS } from './apiConfig';

// Product interfaces
export interface ProductAgeGroup {
  min: number;
  max: number;
}

export interface ProductSpecifications {
  [key: string]: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  category: 'robotics' | 'ai' | 'coding' | 'electronics' | 'science' | 'other';
  ageGroup: ProductAgeGroup;
  images: string[];
  features: string[];
  specifications: ProductSpecifications;
  inStock: boolean;
  stockQuantity: number;
  tags: string[];
  rating: number;
  reviewCount: number;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductResponse {
  success: boolean;
  data: Product;
}

export interface ProductsResponse {
  success: boolean;
  count: number;
  total: number;
  page: number;
  pages: number;
  data: Product[];
}

// Get all products
export const getProducts = async (params?: {
  page?: number;
  limit?: number;
  category?: string;
  search?: string;
  featured?: boolean;
  sort?: string;
  order?: string;
}): Promise<ProductsResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.PRODUCTS, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Get featured products
export const getFeaturedProducts = async (limit: number = 6): Promise<ProductsResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.PRODUCTS_FEATURED, { params: { limit } });
    return response.data;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
};

// Get products by category
export const getProductsByCategory = async (category: string, limit: number = 10): Promise<ProductsResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.PRODUCTS_BY_CATEGORY(category), { params: { limit } });
    return response.data;
  } catch (error) {
    console.error('Error fetching products by category:', error);
    throw error;
  }
};

// Get single product
export const getProduct = async (id: string): Promise<ProductResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.PRODUCT_DETAIL(id));
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

export default {
  getProducts,
  getFeaturedProducts,
  getProductsByCategory,
  getProduct
};