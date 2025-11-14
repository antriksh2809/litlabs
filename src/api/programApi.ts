import axios from 'axios';
import { API_ENDPOINTS } from './apiConfig';

// Program interfaces
export interface Program {
  _id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  category: string;
  images: string[];
  features: string[];
  outcomes: string[];
  duration?: string;
  level?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProgramResponse {
  success: boolean;
  data: Program;
}

export interface ProgramsResponse {
  success: boolean;
  count: number;
  data: Program[];
}

// Get all programs
export const getPrograms = async (): Promise<ProgramsResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.PROGRAMS);
    return response.data;
  } catch (error) {
    console.error('Error fetching programs:', error);
    throw error;
  }
};

// Get single program
export const getProgram = async (id: string): Promise<ProgramResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.PROGRAM_DETAIL(id));
    return response.data;
  } catch (error) {
    console.error('Error fetching program:', error);
    throw error;
  }
};

export default {
  getPrograms,
  getProgram
};