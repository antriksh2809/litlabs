import express from 'express';
import {
  getPrograms,
  getProgram,
  createProgram,
  updateProgram,
  deleteProgram,
  getFeaturedPrograms,
  getProgramsByCategory,
  enrollInProgram
} from '../controllers/programController';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Public routes
router.get('/', getPrograms);
router.get('/featured', getFeaturedPrograms);
router.get('/category/:category', getProgramsByCategory);
router.get('/:id', getProgram);

// Protected routes
router.post('/:id/enroll', authenticate, enrollInProgram);

// Admin routes
router.post('/', authenticate, authorize('admin'), createProgram);
router.put('/:id', authenticate, authorize('admin'), updateProgram);
router.delete('/:id', authenticate, authorize('admin'), deleteProgram);

export default router;
