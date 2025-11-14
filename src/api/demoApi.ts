import axios from 'axios';
import { API_ENDPOINTS } from './apiConfig';

export interface DemoLeadData {
  name: string;
  email: string;
  phone: string;
  role: string;
  organisation: string;
  country: string;
  state?: string;
  interests: string[];
  preferredAtIST?: string;
  message?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export interface DemoLeadResponse {
  success: boolean;
  data?: {
    id: string;
    message: string;
  };
  fieldErrors?: Record<string, string[]>;
  error?: string;
}

export async function submitDemoLead(data: DemoLeadData): Promise<DemoLeadResponse> {
  try {
    const response = await axios.post(API_ENDPOINTS.DEMO_LEAD, data);
    return response.data;
  } catch (error: any) {
    console.error('Demo submission error:', error);
    
    // Handle validation errors
    if (error.response?.data?.fieldErrors) {
      return {
        success: false,
        fieldErrors: error.response.data.fieldErrors
      };
    }
    
    // Handle general errors
    return {
      success: false,
      error: error.response?.data?.message || 'Server error. Please try again.'
    };
  }
}