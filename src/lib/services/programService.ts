import api, { ApiResponse, PaginatedResponse, ApiError } from '../api';

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

// Program Types
export interface Program {
  _id: string;
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
    startDate: string;
    endDate: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface ProgramFilters {
  page?: number;
  limit?: number;
  category?: string;
  level?: string;
  ageGroup?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
  featured?: boolean;
  isOnline?: boolean;
  sort?: string;
  order?: 'asc' | 'desc';
}

// Program Service Functions
export const programService = {
  // Get all programs with optional filters
  async getPrograms(filters: ProgramFilters = {}): Promise<PaginatedResponse<Program>> {
    try {
      const params = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, value.toString());
        }
      });

      const response = await api.get(`/programs?${params.toString()}`);
      return response.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get single program by ID
  async getProgram(id: string): Promise<Program> {
    try {
      const response = await api.get(`/programs/${id}`);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get featured programs
  async getFeaturedPrograms(limit: number = 6): Promise<Program[]> {
    try {
      const response = await api.get(`/programs/featured?limit=${limit}`);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Get programs by category
  async getProgramsByCategory(category: string, limit: number = 10): Promise<Program[]> {
    try {
      const response = await api.get(`/programs/category/${category}?limit=${limit}`);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Enroll in program
  async enrollInProgram(id: string): Promise<Program> {
    try {
      const response = await api.post(`/programs/${id}/enroll`);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Create program (Admin only)
  async createProgram(programData: Partial<Program>): Promise<Program> {
    try {
      const response = await api.post('/programs', programData);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Update program (Admin only)
  async updateProgram(id: string, programData: Partial<Program>): Promise<Program> {
    try {
      const response = await api.put(`/programs/${id}`, programData);
      return response.data.data;
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Delete program (Admin only)
  async deleteProgram(id: string): Promise<void> {
    try {
      await api.delete(`/programs/${id}`);
    } catch (error) {
      throw new Error(handleApiError(error));
    }
  },

  // Search programs
  async searchPrograms(query: string, filters: Omit<ProgramFilters, 'search'> = {}): Promise<PaginatedResponse<Program>> {
    return this.getPrograms({ ...filters, search: query });
  }
};

export default programService;
