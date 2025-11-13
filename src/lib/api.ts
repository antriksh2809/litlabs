// frontend/src/lib/services/api.ts
// why: single Axios instance + common error translator for all services
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// Custom error class for API errors
class ApiError extends Error {
  status?: number;
  data?: any;
  
  constructor(message: string, status?: number, data?: any) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data: T;
  count?: number;
  total?: number;
  page?: number;
  pages?: number;
}

export interface PaginatedResponse<T> {
  success: boolean;
  count: number;
  total: number;
  page: number;
  pages: number;
  data: T[];
}

// Response data type for list endpoints
export interface ListResponse<T> {
  data: T[];
  count: number;
  total: number;
  page: number;
  pages: number;
}

// Create axios instance with default config
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000, // Increased timeout
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true, // Important for cookies
});

// Request interceptor for adding auth token and other headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    // Add request start time for logging
    (config as any).metadata = { startTime: new Date() };
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling and logging
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log successful requests
    const endTime = new Date();
    const startTime = (response.config as any).metadata?.startTime;
    const duration = startTime ? endTime.getTime() - startTime.getTime() : 0;
    
    console.debug(`[API] ${response.config.method?.toUpperCase()} ${response.config.url} - ${response.status} (${duration}ms)`);
    
    // Handle non-successful responses that still return 200
    if (response.data && typeof response.data === 'object' && 'success' in response.data && !response.data.success) {
      throw new ApiError(
        response.data.message || 'Request failed',
        response.status,
        response.data
      );
    }
    
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as any;
    
    // Log error
    console.error('[API Error]', {
      url: originalRequest?.url,
      method: originalRequest?.method,
      status: error.response?.status,
      data: error.response?.data,
    });
    
    // Handle token expiration (401) with refresh token logic
    if (error.response?.status === 401 && !originalRequest?._retry) {
      originalRequest._retry = true;
      
      try {
        // Try to refresh token
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/auth/refresh-token`, { refreshToken });
          const { token, refreshToken: newRefreshToken } = response.data.data;
          
          localStorage.setItem('token', token);
          localStorage.setItem('refreshToken', newRefreshToken);
          
          // Update the Authorization header
          originalRequest.headers.Authorization = `Bearer ${token}`;
          
          // Retry the original request
          return api(originalRequest);
        }
      } catch (refreshError) {
        // If refresh fails, clear auth and redirect to login
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(new ApiError('Session expired. Please log in again.', 401));
      }
    }
    
    // Handle other errors
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      const message = (error.response.data as any)?.message || error.message || 'An error occurred';
      return Promise.reject(new ApiError(message, error.response.status, error.response.data));
    } else if (error.request) {
      // The request was made but no response was received
      return Promise.reject(new ApiError('No response from server. Please check your connection.', 0));
    } else {
      // Something happened in setting up the request that triggered an Error
      return Promise.reject(new ApiError(error.message || 'An unexpected error occurred'));
    }
  }
);

// Helper function for making API calls with retry logic
const fetchWithRetry = async <T>(
  config: AxiosRequestConfig,
  retries = MAX_RETRIES,
  delay = RETRY_DELAY
): Promise<AxiosResponse<T>> => {
  try {
    return await api.request<T>(config);
  } catch (error) {
    if (retries === 0) {
      throw error;
    }
    
    // Only retry on network errors or 5xx errors
    const isNetworkError = !error.response;
    const isServerError = error.response?.status >= 500;
    
    if (isNetworkError || isServerError) {
      await new Promise(resolve => setTimeout(resolve, delay));
      return fetchWithRetry<T>(config, retries - 1, delay * 2); // Exponential backoff
    }
    
    throw error;
  }
};

// Wrapper functions for HTTP methods
const http = {
  get: <T>(url: string, config?: AxiosRequestConfig) => 
    fetchWithRetry<ApiResponse<T>>({ ...config, method: 'GET', url }),
    
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig) => 
    fetchWithRetry<ApiResponse<T>>({ ...config, method: 'POST', url, data }),
    
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig) => 
    fetchWithRetry<ApiResponse<T>>({ ...config, method: 'PUT', url, data }),
    
  delete: <T>(url: string, config?: AxiosRequestConfig) => 
    fetchWithRetry<ApiResponse<T>>({ ...config, method: 'DELETE', url }),
    
  patch: <T>(url: string, data?: any, config?: AxiosRequestConfig) => 
    fetchWithRetry<ApiResponse<T>>({ ...config, method: 'PATCH', url, data }),
};

// Error handling utility
export const handleApiError = (error: unknown): string => {
  if (error instanceof ApiError) {
    return error.message;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unexpected error occurred';
};

export { api };
export { ApiError, type ApiResponse, type PaginatedResponse }; // if not already exported
export { http }; // if you want to keep the http wrapper used by productService

