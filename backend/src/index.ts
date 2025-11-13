// backend/src/index.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import path from 'path';
import { Server } from 'http';

// Import routes
import authRoutes from './routes/auth';
import productRoutes from './routes/products';
import programRoutes from './routes/programs';
import bookRoutes from './routes/books';

// Import middleware
import { errorHandler, notFound } from './middleware/errorHandler';

// Load environment variables
dotenv.config();

const app = express();

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000', 10), // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100', 10), // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: 'Too many requests from this IP, please try again later.'
  }
});
app.use(limiter);

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
  })
);

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check endpoint
app.get('/health', (_req, res) => {
  res.json({
    success: true,
    message: 'L.I.T. LABS API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/programs', programRoutes);
app.use('/api/books', bookRoutes);

// 404 handler
app.use(notFound);

// Error handling middleware
app.use(errorHandler);

// Database connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/lit-labs';
    await mongoose.connect(mongoURI);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

// Start server
const PORT = Number(process.env.PORT || 5000);

let server: Server | null = null;
let isShuttingDown = false;

const startServer = async () => {
  try {
    await connectDB();

    server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📚 L.I.T. LABS API is ready!`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

// Centralized graceful shutdown (fixes TS2345 by removing callback usage)
const gracefulShutdown = async (signal: string, code: number) => {
  if (isShuttingDown) return; // why: prevent double-invocation on multiple signals
  isShuttingDown = true;

  try {
    console.log(`🛑 ${signal} received. Shutting down gracefully...`);

    if (server) {
      await new Promise<void>((resolve) => server!.close(() => resolve()));
      console.log('🔒 HTTP server closed.');
    }

    await mongoose.disconnect(); // Promise-based in Mongoose v6/7
    console.log('📦 MongoDB connection closed.');

    process.exit(code);
  } catch (err) {
    console.error('💥 Error during shutdown:', err);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err: unknown) => {
  console.error('❌ Unhandled Promise Rejection:', err);
  void gracefulShutdown('unhandledRejection', 1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err: Error) => {
  console.error('❌ Uncaught Exception:', err.message);
  void gracefulShutdown('uncaughtException', 1);
});

// Signals
process.on('SIGINT', () => void gracefulShutdown('SIGINT', 0));
process.on('SIGTERM', () => void gracefulShutdown('SIGTERM', 0));

// Optional: Nodemon restart on some platforms
process.once('SIGUSR2' as NodeJS.Signals, () => {
  void gracefulShutdown('SIGUSR2', 0).finally(() => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

void startServer();
