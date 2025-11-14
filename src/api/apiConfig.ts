// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  // Auth endpoints
  AUTH_LOGIN: `${API_BASE_URL}/auth/login`,
  AUTH_REGISTER: `${API_BASE_URL}/auth/register`,
  AUTH_PROFILE: `${API_BASE_URL}/auth/profile`,
  
  // Product endpoints
  PRODUCTS: `${API_BASE_URL}/products`,
  PRODUCTS_FEATURED: `${API_BASE_URL}/products/featured`,
  PRODUCTS_BY_CATEGORY: (category: string) => `${API_BASE_URL}/products/category/${category}`,
  PRODUCT_DETAIL: (id: string) => `${API_BASE_URL}/products/${id}`,
  
  // Program endpoints
  PROGRAMS: `${API_BASE_URL}/programs`,
  PROGRAM_DETAIL: (id: string) => `${API_BASE_URL}/programs/${id}`,
  
  // Book endpoints
  BOOKS: `${API_BASE_URL}/books`,
  BOOK_DETAIL: (id: string) => `${API_BASE_URL}/books/${id}`,
  
  // Demo lead endpoint
  DEMO_LEAD: `${API_BASE_URL}/demo/lead`,
};

export default API_BASE_URL;