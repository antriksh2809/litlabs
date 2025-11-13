import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";
import { AuthRequest } from "../middleware/auth";

// Generate JWT Token
export function generateToken(userId: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET not set in environment");

  return jwt.sign({ userId }, secret as jwt.Secret, {
    expiresIn: "7d",
  });
}

// @desc    Register user
// @route   POST /api/auth/register
// @access  Public
// ✅ add a return type (optional but nice for clarity)
export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { name, email, password, role = "user" } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }

    const user = await User.create({ name, email, password, role });

    const token = generateToken(String(user._id));

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
        },
        token,
      },
    });
  } catch (error) {
    return next(error);
  }
};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    if (!user.isActive) {
      return res
        .status(401)
        .json({ success: false, message: "Account is deactivated" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });
    }

    user.lastLogin = new Date();
    await user.save();

    const token = generateToken(String(user._id));

    return res.json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          avatar: user.avatar,
          lastLogin: user.lastLogin,
        },
        token,
      },
    });
  } catch (error) {
    return next(error);
  }
};

// @desc    Get current user
// @route   GET /api/auth/me
// @access  Private
export const getMe = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.user!._id).select("-password");

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update user profile
// @route   PUT /api/auth/profile
// @access  Private
export const updateProfile = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const fieldsToUpdate = {
      name: req.body.name,
      phone: req.body.phone,
      address: req.body.address,
      preferences: req.body.preferences,
    };

    // Remove undefined fields
    Object.keys(fieldsToUpdate).forEach((key) => {
      if (fieldsToUpdate[key as keyof typeof fieldsToUpdate] === undefined) {
        delete fieldsToUpdate[key as keyof typeof fieldsToUpdate];
      }
    });

    const user = await User.findByIdAndUpdate(req.user!._id, fieldsToUpdate, {
      new: true,
      runValidators: true,
    }).select("-password");

    res.json({
      success: true,
      message: "Profile updated successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Change password
// @route   PUT /api/auth/change-password
// @access  Private
export const changePassword = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { currentPassword, newPassword } = req.body;

    const user = await User.findById(req.user!._id).select("+password");
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const isCurrentPasswordValid = await user.comparePassword(currentPassword);
    if (!isCurrentPasswordValid) {
      return res
        .status(400)
        .json({ success: false, message: "Current password is incorrect" });
    }

    user.password = newPassword;
    await user.save();

    return res.json({
      success: true,
      message: "Password changed successfully",
    });
  } catch (error) {
    return next(error);
  }
};

// @desc    Create admin user (for initial setup)
// @route   POST /api/auth/create-admin
// @access  Public (should be restricted in production)
export const createAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  try {
    const { name, email, password } = req.body;

    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      return res
        .status(400)
        .json({ success: false, message: "Admin user already exists" });
    }

    const admin = await User.create({ name, email, password, role: "admin" });
    const token = generateToken(String(admin._id));

    return res.status(201).json({
      success: true,
      message: "Admin user created successfully",
      data: {
        user: {
          id: admin._id,
          name: admin.name,
          email: admin.email,
          role: admin.role,
        },
        token,
      },
    });
  } catch (error) {
    return next(error);
  }
};
