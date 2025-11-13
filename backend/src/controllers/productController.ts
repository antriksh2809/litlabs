import { Request, Response, NextFunction } from 'express';
import Product, { IProduct } from '../models/Product';
import { AuthRequest } from '../middleware/auth';

// @desc    Get all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      ageGroup,
      minPrice,
      maxPrice,
      search,
      featured,
      sort = 'createdAt',
      order = 'desc'
    } = req.query;

    // Build filter object
    const filter: any = { isActive: true };

    if (category) {
      filter.category = category;
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

    if (search) {
      filter.$text = { $search: search as string };
    }

    // Build sort object
    const sortObj: any = {};
    sortObj[sort as string] = order === 'desc' ? -1 : 1;

    const pageNum = Number(page);
    const limitNum = Number(limit);
    const skip = (pageNum - 1) * limitNum;

    const products = await Product.find(filter)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .select('-__v');

    const total = await Product.countDocuments(filter);

    res.json({
      success: true,
      count: products.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single product
// @route   GET /api/products/:id
// @access  Public
export const getProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findById(req.params.id).select('-__v');

    if (!product || !product.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new product
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
export const updateProduct = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).select('-__v');

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
export const deleteProduct = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }

    res.json({
      success: true,
      message: 'Product deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured products
// @route   GET /api/products/featured
// @access  Public
export const getFeaturedProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const limit = Number(req.query.limit) || 6;
    
    const products = await Product.find({
      isFeatured: true,
      isActive: true
    })
      .sort({ createdAt: -1 })
      .limit(limit)
      .select('-__v');

    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get products by category
// @route   GET /api/products/category/:category
// @access  Public
export const getProductsByCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category } = req.params;
    const { limit = 10 } = req.query;

    const products = await Product.find({
      category,
      isActive: true
    })
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .select('-__v');

    res.json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};
