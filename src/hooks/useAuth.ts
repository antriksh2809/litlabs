import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { authService, LoginCredentials, RegisterData, UpdateProfileData, ChangePasswordData, User } from '@/lib/services/authService';
import { toast } from 'sonner';

// Query Keys
export const authKeys = {
  user: ['auth', 'user'] as const,
};

// Hooks
export const useCurrentUser = () => {
  return useQuery({
    queryKey: authKeys.user,
    queryFn: authService.getCurrentUser,
    enabled: authService.isAuthenticated(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: false,
  });
};

// Mutations
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (data) => {
      queryClient.setQueryData(authKeys.user, data.user);
      toast.success('Login successful!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData: RegisterData) => authService.register(userData),
    onSuccess: (data) => {
      queryClient.setQueryData(authKeys.user, data.user);
      toast.success('Registration successful!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => {
      authService.logout();
      return Promise.resolve();
    },
    onSuccess: () => {
      queryClient.clear();
      toast.success('Logged out successfully!');
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (profileData: UpdateProfileData) => authService.updateProfile(profileData),
    onSuccess: (user) => {
      queryClient.setQueryData(authKeys.user, user);
      toast.success('Profile updated successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (passwordData: ChangePasswordData) => authService.changePassword(passwordData),
    onSuccess: () => {
      toast.success('Password changed successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Utility hooks
export const useAuth = () => {
  const { data: user, isLoading, error } = useCurrentUser();
  
  return {
    user,
    isLoading,
    error,
    isAuthenticated: authService.isAuthenticated(),
    isAdmin: authService.isAdmin(),
    isInstructor: authService.isInstructor(),
    logout: () => authService.logout(),
  };
};

export const useStoredUser = (): User | null => {
  return authService.getStoredUser();
};
