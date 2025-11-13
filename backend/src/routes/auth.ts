import express from 'express';
import {
  register,
  login,
  getMe,
  updateProfile,
  changePassword,
  createAdmin
} from '../controllers/authController';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Public routes
router.post('/register', register);
router.post('/login', login);
router.post('/create-admin', createAdmin); // Should be restricted in production

// Protected routes
router.get('/me', authenticate, getMe);
router.put('/profile', authenticate, updateProfile);
router.put('/change-password', authenticate, changePassword);

export default router;
