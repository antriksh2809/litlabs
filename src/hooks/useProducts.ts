import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService, Product, ProductFilters } from '@/lib/services/productService';
import { toast } from 'sonner';

// Query Keys
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: ProductFilters) => [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
  featured: () => [...productKeys.all, 'featured'] as const,
  category: (category: string) => [...productKeys.all, 'category', category] as const,
};

// Hooks
export const useProducts = (filters: ProductFilters = {}) => {
  return useQuery({
    queryKey: productKeys.list(filters),
    queryFn: () => productService.getProducts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productService.getProduct(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useFeaturedProducts = (limit: number = 6) => {
  return useQuery({
    queryKey: [...productKeys.featured(), limit],
    queryFn: () => productService.getFeaturedProducts(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useProductsByCategory = (category: string, limit: number = 10) => {
  return useQuery({
    queryKey: [...productKeys.category(category), limit],
    queryFn: () => productService.getProductsByCategory(category, limit),
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
  });
};

export const useSearchProducts = (query: string, filters: Omit<ProductFilters, 'search'> = {}) => {
  return useQuery({
    queryKey: [...productKeys.lists(), 'search', query, filters],
    queryFn: () => productService.searchProducts(query, filters),
    enabled: !!query && query.length > 2,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// Mutations
export const useCreateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productData: Partial<Product>) => productService.createProduct(productData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.all });
      toast.success('Product created successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Product> }) =>
      productService.updateProduct(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: productKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: productKeys.lists() });
      toast.success('Product updated successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => productService.deleteProduct(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: productKeys.all });
      toast.success('Product deleted successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
