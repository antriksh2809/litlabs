import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { programService, Program, ProgramFilters } from '@/lib/services/programService';
import { toast } from 'sonner';

// Query Keys
export const programKeys = {
  all: ['programs'] as const,
  lists: () => [...programKeys.all, 'list'] as const,
  list: (filters: ProgramFilters) => [...programKeys.lists(), filters] as const,
  details: () => [...programKeys.all, 'detail'] as const,
  detail: (id: string) => [...programKeys.details(), id] as const,
  featured: () => [...programKeys.all, 'featured'] as const,
  category: (category: string) => [...programKeys.all, 'category', category] as const,
};

// Hooks
export const usePrograms = (filters: ProgramFilters = {}) => {
  return useQuery({
    queryKey: programKeys.list(filters),
    queryFn: () => programService.getPrograms(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProgram = (id: string) => {
  return useQuery({
    queryKey: programKeys.detail(id),
    queryFn: () => programService.getProgram(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useFeaturedPrograms = (limit: number = 6) => {
  return useQuery({
    queryKey: [...programKeys.featured(), limit],
    queryFn: () => programService.getFeaturedPrograms(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useProgramsByCategory = (category: string, limit: number = 10) => {
  return useQuery({
    queryKey: [...programKeys.category(category), limit],
    queryFn: () => programService.getProgramsByCategory(category, limit),
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
  });
};

export const useSearchPrograms = (query: string, filters: Omit<ProgramFilters, 'search'> = {}) => {
  return useQuery({
    queryKey: [...programKeys.lists(), 'search', query, filters],
    queryFn: () => programService.searchPrograms(query, filters),
    enabled: !!query && query.length > 2,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// Mutations
export const useEnrollInProgram = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => programService.enrollInProgram(id),
    onSuccess: (_, id) => {
      queryClient.invalidateQueries({ queryKey: programKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: programKeys.lists() });
      toast.success('Successfully enrolled in program!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useCreateProgram = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (programData: Partial<Program>) => programService.createProgram(programData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: programKeys.all });
      toast.success('Program created successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateProgram = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Program> }) =>
      programService.updateProgram(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: programKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: programKeys.lists() });
      toast.success('Program updated successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteProgram = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => programService.deleteProgram(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: programKeys.all });
      toast.success('Program deleted successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
