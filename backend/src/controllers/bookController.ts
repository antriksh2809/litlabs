import { Request, Response, NextFunction } from 'express';
import Book, { IBook } from '../models/Book';
import { AuthRequest } from '../middleware/auth';

// @desc    Get all books
// @route   GET /api/books
// @access  Public
export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      level,
      ageGroup,
      minPrice,
      maxPrice,
      search,
      featured,
      format,
      sort = 'createdAt',
      order = 'desc'
    } = req.query;

    // Build filter object
    const filter: any = { isActive: true };

    if (category) {
      filter.category = category;
    }

    if (level) {
      filter.level = level;
    }

    if (ageGroup) {
      const [min, max] = (ageGroup as string).split('-').map(Number);
      filter['ageGroup.min'] = { $lte: max };
      filter['ageGroup.max'] = { $gte: min };
    }

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    if (featured === 'true') {
      filter.isFeatured = true;
    }

    if (format) {
      filter.format = format;
    }

    if (search) {
      filter.$text = { $search: search as string };
    }

    // Build sort object
    const sortObj: any = {};
    sortObj[sort as string] = order === 'desc' ? -1 : 1;

    const pageNum = Number(page);
    const limitNum = Number(limit);
    const skip = (pageNum - 1) * limitNum;

    const books = await Book.find(filter)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .select('-__v');

    const total = await Book.countDocuments(filter);

    res.json({
      success: true,
      count: books.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      data: books
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single book
// @route   GET /api/books/:id
// @access  Public
export const getBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const book = await Book.findById(req.params.id).select('-__v');

    if (!book || !book.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.json({
      success: true,
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new book
// @route   POST /api/books
// @access  Private/Admin
export const createBook = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const book = await Book.create(req.body);

    res.status(201).json({
      success: true,
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update book
// @route   PUT /api/books/:id
// @access  Private/Admin
export const updateBook = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).select('-__v');

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.json({
      success: true,
      data: book
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete book
// @route   DELETE /api/books/:id
// @access  Private/Admin
export const deleteBook = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }

    res.json({
      success: true,
      message: 'Book deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured books
// @route   GET /api/books/featured
// @access  Public
export const getFeaturedBooks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const limit = Number(req.query.limit) || 6;
    
    const books = await Book.find({
      isFeatured: true,
      isActive: true
    })
      .sort({ createdAt: -1 })
      .limit(limit)
      .select('-__v');

    res.json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get books by category
// @route   GET /api/books/category/:category
// @access  Public
export const getBooksByCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category } = req.params;
    const { limit = 10 } = req.query;

    const books = await Book.find({
      category,
      isActive: true
    })
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .select('-__v');

    res.json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get books by author
// @route   GET /api/books/author/:author
// @access  Public
export const getBooksByAuthor = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { author } = req.params;
    const { limit = 10 } = req.query;

    const books = await Book.find({
      author: { $regex: author, $options: 'i' },
      isActive: true
    })
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .select('-__v');

    res.json({
      success: true,
      count: books.length,
      data: books
    });
  } catch (error) {
    next(error);
  }
};
