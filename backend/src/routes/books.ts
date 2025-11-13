import express from 'express';
import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  getFeaturedBooks,
  getBooksByCategory,
  getBooksByAuthor
} from '../controllers/bookController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getBooks);
router.get('/featured', getFeaturedBooks);
router.get('/category/:category', getBooksByCategory);
router.get('/author/:author', getBooksByAuthor);
router.get('/:id', getBook);

// Protected routes (Admin only)
router.post('/', authenticate, authorize('admin'), createBook);
router.put('/:id', authenticate, authorize('admin'), updateBook);
router.delete('/:id', authenticate, authorize('admin'), deleteBook);

export default router;
