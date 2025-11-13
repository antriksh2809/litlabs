import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { bookService, Book, BookFilters } from '@/lib/services/bookService';
import { toast } from 'sonner';

// Query Keys
export const bookKeys = {
  all: ['books'] as const,
  lists: () => [...bookKeys.all, 'list'] as const,
  list: (filters: BookFilters) => [...bookKeys.lists(), filters] as const,
  details: () => [...bookKeys.all, 'detail'] as const,
  detail: (id: string) => [...bookKeys.details(), id] as const,
  featured: () => [...bookKeys.all, 'featured'] as const,
  category: (category: string) => [...bookKeys.all, 'category', category] as const,
  author: (author: string) => [...bookKeys.all, 'author', author] as const,
};

// Hooks
export const useBooks = (filters: BookFilters = {}) => {
  return useQuery({
    queryKey: bookKeys.list(filters),
    queryFn: () => bookService.getBooks(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useBook = (id: string) => {
  return useQuery({
    queryKey: bookKeys.detail(id),
    queryFn: () => bookService.getBook(id),
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });
};

export const useFeaturedBooks = (limit: number = 6) => {
  return useQuery({
    queryKey: [...bookKeys.featured(), limit],
    queryFn: () => bookService.getFeaturedBooks(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};

export const useBooksByCategory = (category: string, limit: number = 10) => {
  return useQuery({
    queryKey: [...bookKeys.category(category), limit],
    queryFn: () => bookService.getBooksByCategory(category, limit),
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
  });
};

export const useBooksByAuthor = (author: string, limit: number = 10) => {
  return useQuery({
    queryKey: [...bookKeys.author(author), limit],
    queryFn: () => bookService.getBooksByAuthor(author, limit),
    enabled: !!author,
    staleTime: 5 * 60 * 1000,
  });
};

export const useSearchBooks = (query: string, filters: Omit<BookFilters, 'search'> = {}) => {
  return useQuery({
    queryKey: [...bookKeys.lists(), 'search', query, filters],
    queryFn: () => bookService.searchBooks(query, filters),
    enabled: !!query && query.length > 2,
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// Mutations
export const useCreateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bookData: Partial<Book>) => bookService.createBook(bookData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookKeys.all });
      toast.success('Book created successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useUpdateBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<Book> }) =>
      bookService.updateBook(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: bookKeys.detail(id) });
      queryClient.invalidateQueries({ queryKey: bookKeys.lists() });
      toast.success('Book updated successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => bookService.deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: bookKeys.all });
      toast.success('Book deleted successfully!');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};
