import { api, ApiResponse, PaginatedResponse, handleApiError } from './api';

// Book Types
export interface Book {
  _id: string;
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
  publishedDate: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface BookFilters {
  page?: number;
  limit?: number;
  category?: string;
  level?: string;
  ageGroup?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  featured?: boolean;
  format?: string;
  sort?: string;
  order?: 'asc' | 'desc';
}

// Book Service Functions
export const bookService = {
  // Get all books with optional filters
  async getBooks(filters: BookFilters = {}): Promise<PaginatedResponse<Book>> {
    try {
      const params = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, value.toString());
        }
      });

      const response = await api.get(`/books?${params.toString()}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get single book by ID
  async getBook(id: string): Promise<Book> {
    try {
      const response = await api.get(`/books/${id}`);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get featured books
  async getFeaturedBooks(limit: number = 6): Promise<Book[]> {
    try {
      const response = await api.get(`/books/featured?limit=${limit}`);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get books by category
  async getBooksByCategory(category: string, limit: number = 10): Promise<Book[]> {
    try {
      const response = await api.get(`/books/category/${category}?limit=${limit}`);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get books by author
  async getBooksByAuthor(author: string, limit: number = 10): Promise<Book[]> {
    try {
      const response = await api.get(`/books/author/${encodeURIComponent(author)}?limit=${limit}`);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Create book (Admin only)
  async createBook(bookData: Partial<Book>): Promise<Book> {
    try {
      const response = await api.post('/books', bookData);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Update book (Admin only)
  async updateBook(id: string, bookData: Partial<Book>): Promise<Book> {
    try {
      const response = await api.put(`/books/${id}`, bookData);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Delete book (Admin only)
  async deleteBook(id: string): Promise<void> {
    try {
      await api.delete(`/books/${id}`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Search books
  async searchBooks(query: string, filters: Omit<BookFilters, 'search'> = {}): Promise<PaginatedResponse<Book>> {
    return this.getBooks({ ...filters, search: query });
  }
};

export default bookService;
