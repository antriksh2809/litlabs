import { Request, Response, NextFunction } from 'express';
import Program, { IProgram } from '../models/Program';
import { AuthRequest } from '../middleware/auth';

// @desc    Get all programs
// @route   GET /api/programs
// @access  Public
export const getPrograms = async (req: Request, res: Response, next: NextFunction) => {
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
      isOnline,
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

    if (isOnline !== undefined) {
      filter.isOnline = isOnline === 'true';
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

    const programs = await Program.find(filter)
      .sort(sortObj)
      .skip(skip)
      .limit(limitNum)
      .select('-__v');

    const total = await Program.countDocuments(filter);

    res.json({
      success: true,
      count: programs.length,
      total,
      page: pageNum,
      pages: Math.ceil(total / limitNum),
      data: programs
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single program
// @route   GET /api/programs/:id
// @access  Public
export const getProgram = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const program = await Program.findById(req.params.id).select('-__v');

    if (!program || !program.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }

    res.json({
      success: true,
      data: program
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new program
// @route   POST /api/programs
// @access  Private/Admin
export const createProgram = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const program = await Program.create(req.body);

    res.status(201).json({
      success: true,
      data: program
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update program
// @route   PUT /api/programs/:id
// @access  Private/Admin
export const updateProgram = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    ).select('-__v');

    if (!program) {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }

    res.json({
      success: true,
      data: program
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete program
// @route   DELETE /api/programs/:id
// @access  Private/Admin
export const deleteProgram = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const program = await Program.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );

    if (!program) {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }

    res.json({
      success: true,
      message: 'Program deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get featured programs
// @route   GET /api/programs/featured
// @access  Public
export const getFeaturedPrograms = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const limit = Number(req.query.limit) || 6;
    
    const programs = await Program.find({
      isFeatured: true,
      isActive: true
    })
      .sort({ createdAt: -1 })
      .limit(limit)
      .select('-__v');

    res.json({
      success: true,
      count: programs.length,
      data: programs
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get programs by category
// @route   GET /api/programs/category/:category
// @access  Public
export const getProgramsByCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { category } = req.params;
    const { limit = 10 } = req.query;

    const programs = await Program.find({
      category,
      isActive: true
    })
      .sort({ createdAt: -1 })
      .limit(Number(limit))
      .select('-__v');

    res.json({
      success: true,
      count: programs.length,
      data: programs
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Enroll in program
// @route   POST /api/programs/:id/enroll
// @access  Private
export const enrollInProgram = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const program = await Program.findById(req.params.id);

    if (!program || !program.isActive) {
      return res.status(404).json({
        success: false,
        message: 'Program not found'
      });
    }

    if (program.enrolledStudents >= program.maxStudents) {
      return res.status(400).json({
        success: false,
        message: 'Program is full'
      });
    }

    // Check if user is already enrolled (you might want to create a separate enrollment model)
    // For now, we'll just increment the enrolled count
    program.enrolledStudents += 1;
    await program.save();

    res.json({
      success: true,
      message: 'Successfully enrolled in program',
      data: program
    });
  } catch (error) {
    next(error);
  }
};
