import { http, ApiError, ApiResponse, PaginatedResponse } from '../api';

// Helper function to handle API errors
const handleApiError = (error: unknown): string => {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

// Types
type ProductStatus = 'draft' | 'published' | 'archived';
type ProductType = 'physical' | 'digital' | 'service';

export interface ProductImage {
  url: string;
  alt?: string;
  isPrimary?: boolean;
}

export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  inventoryQuantity: number;
  barcode?: string;
  weight?: number;
  weightUnit?: 'g' | 'kg' | 'lb' | 'oz';
  options: {
    name: string;
    value: string;
  }[];
}

export interface ProductOption {
  id: string;
  name: string;
  values: string[];
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  shortDescription?: string;
  slug: string;
  sku: string;
  price: number;
  compareAtPrice?: number;
  costPrice?: number;
  isTaxable: boolean;
  taxCode?: string;
  status: ProductStatus;
  type: ProductType;
  vendor?: string;
  collections: string[];
  categories: string[];
  tags: string[];
  images: ProductImage[];
  variants: ProductVariant[];
  options: ProductOption[];
  inventoryQuantity: number;
  trackInventory: boolean;
  weight?: number;
  weightUnit?: 'g' | 'kg' | 'lb' | 'oz';
  seoTitle?: string;
  seoDescription?: string;
  isFeatured: boolean;
  isGiftCard: boolean;
  requiresShipping: boolean;
  isDownloadable: boolean;
  downloads?: {
    name: string;
    url: string;
    type: string;
    size: number;
  }[];
  isSubscription: boolean;
  subscriptionInterval?: {
    interval: 'day' | 'week' | 'month' | 'year';
    intervalCount: number;
  };
  // Educational/Technical Fields
  ageRange?: {
    min: number;
    max: number;
  };
  gradeLevel?: string[];
  learningOutcomes?: string[];
  curriculum?: {
    standard: string;
    codes: string[];
  }[];
  prerequisites?: string[];
  skillLevel?: 'beginner' | 'intermediate' | 'advanced';
  includedItems?: {
    name: string;
    quantity: number;
    type: 'hardware' | 'software' | 'documentation';
  }[];
  technicalSpecs?: {
    [key: string]: string;
  };
  compatibility?: string[];
  programmingLanguages?: string[];
  rating?: number;
  reviewCount?: number;
  badge?: string;
  createdAt: string;
  updatedAt: string;
}

interface ListResponse<T> {
  data: T[];
  count: number;
  total: number;
  page: number;
  pages: number;
}

export interface ProductFilters {
  search?: string;
  status?: ProductStatus;
  type?: ProductType;
  collection?: string;
  category?: string;
  tag?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  isFeatured?: boolean;
  sortBy?: 'name' | 'price' | 'createdAt' | 'updatedAt';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export const productService = {
  // Get all products with optional filters
  async getProducts(filters: ProductFilters = {}): Promise<PaginatedResponse<Product>> {
    try {
      const response = await http.get<PaginatedResponse<Product>>('/products', { 
        params: filters 
      });
      
      if (!response.data?.success || !response.data.data) {
        throw new Error(response.data?.message || 'Failed to fetch products');
      }
      
      return response.data.data as PaginatedResponse<Product>;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get featured products
  async getFeaturedProducts(limit: number = 8): Promise<Product[]> {
    try {
      const response = await http.get<Product[]>('/products/featured', {
        params: { limit }
      });
      if (!response.data?.success || !response.data.data) {
        throw new Error('Failed to fetch featured products');
      }
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get products by category
  async getProductsByCategory(category: string, limit: number = 10): Promise<Product[]> {
    try {
      const response = await http.get<Product[]>(
        `/products/category/${encodeURIComponent(category)}`,
        { params: { limit } }
      );
      if (!response.data?.success || !response.data.data) {
        throw new Error(`Failed to fetch products in category: ${category}`);
      }
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Create product (Admin only)
  async createProduct(productData: Partial<Product>): Promise<Product> {
    try {
      const response = await http.post<Product>('/products', productData);
      if (!response.data?.success || !response.data.data) {
        throw new Error(response.data?.message || 'Failed to create product');
      }
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Update product (Admin only)
  async updateProduct(id: string, productData: Partial<Product>): Promise<Product> {
    try {
      const response = await http.put<Product>(`/products/${id}`, productData);
      if (!response.data?.success || !response.data.data) {
        throw new Error(response.data?.message || 'Failed to update product');
      }
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Delete product (Admin only)
  async deleteProduct(id: string): Promise<void> {
    try {
      await http.delete(`/products/${id}`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Search products
  async searchProducts(query: string, filters: Omit<ProductFilters, 'search'> = {}): Promise<PaginatedResponse<Product>> {
    try {
      const response = await http.get<PaginatedResponse<Product>>('/products/search', {
        params: { ...filters, query }
      });
      
      if (!response.data?.success || !response.data.data) {
        throw new Error(response.data?.message || 'Search failed');
      }
      
      return response.data.data as PaginatedResponse<Product>;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  }
};

export default productService;