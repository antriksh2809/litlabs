import { api, ApiResponse, handleApiError } from '../api';

// Auth Types
export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'instructor';
  avatar?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  preferences: {
    notifications: boolean;
    newsletter: boolean;
    theme: 'light' | 'dark';
  };
  isActive: boolean;
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'instructor';
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface UpdateProfileData {
  name?: string;
  phone?: string;
  address?: User['address'];
  preferences?: Partial<User['preferences']>;
}

export interface ChangePasswordData {
  currentPassword: string;
  newPassword: string;
}

// Auth Service Functions
export const authService = {
  // Register new user
  async register(userData: RegisterData): Promise<AuthResponse> {
    try {
      const response = await api.post('/auth/register', userData);
      const { user, token } = response.data.data;
      
      // Store token and user data in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return { user, token };
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Login user
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    try {
      const response = await api.post('/auth/login', credentials);
      const { user, token } = response.data.data;
      
      // Store token and user data in localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return { user, token };
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Logout user
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // Get current user
  async getCurrentUser(): Promise<User> {
    try {
      const response = await api.get('/auth/me');
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Update user profile
  async updateProfile(profileData: UpdateProfileData): Promise<User> {
    try {
      const response = await api.put('/auth/profile', profileData);
      const updatedUser = response.data.data;
      
      // Update user data in localStorage
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      return updatedUser;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Change password
  async changePassword(passwordData: ChangePasswordData): Promise<void> {
    try {
      await api.put('/auth/change-password', passwordData);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !!token;
  },

  // Get stored user data
  getStoredUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        return null;
      }
    }
    return null;
  },

  // Get stored token
  getStoredToken(): string | null {
    return localStorage.getItem('token');
  },

  // Check if user has specific role
  hasRole(role: string): boolean {
    const user = this.getStoredUser();
    return user?.role === role;
  },

  // Check if user is admin
  isAdmin(): boolean {
    return this.hasRole('admin');
  },

  // Check if user is instructor
  isInstructor(): boolean {
    return this.hasRole('instructor');
  }
};

export default authService;
