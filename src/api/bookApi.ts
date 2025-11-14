import axios from 'axios';
import { API_ENDPOINTS } from './apiConfig';

// Book interfaces
export interface Book {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  images: string[];
  author: string;
  publisher: string;
  publishedDate: string;
  pages: number;
  isbn: string;
  tags: string[];
  price: number;
  originalPrice?: number;
  inStock: boolean;
  stockQuantity: number;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface BookResponse {
  success: boolean;
  data: Book;
}

export interface BooksResponse {
  success: boolean;
  count: number;
  data: Book[];
}

// Get all books
export const getBooks = async (): Promise<BooksResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.BOOKS);
    return response.data;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

// Get single book
export const getBook = async (id: string): Promise<BookResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.BOOK_DETAIL(id));
    return response.data;
  } catch (error) {
    console.error('Error fetching book:', error);
    throw error;
  }
};

export default {
  getBooks,
  getBook
};