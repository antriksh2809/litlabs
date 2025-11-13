import mongoose, {
  Document,
  Schema,
  model,
  type HydratedDocument,
} from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "user" | "instructor";
  avatar?: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  preferences: {
    notifications: boolean;
    newsletter: boolean;
    theme: "light" | "dark";
  };
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [50, "Name cannot exceed 50 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
      select: false, // Don't include password in queries by default
    },
    role: {
      type: String,
      enum: ["admin", "user", "instructor"],
      default: "user",
    },
    avatar: {
      type: String,
    },
    phone: {
      type: String,
      trim: true,
      match: [/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"],
    },
    address: {
      street: {
        type: String,
        trim: true,
        maxlength: [100, "Street address cannot exceed 100 characters"],
      },
      city: {
        type: String,
        trim: true,
        maxlength: [50, "City name cannot exceed 50 characters"],
      },
      state: {
        type: String,
        trim: true,
        maxlength: [50, "State name cannot exceed 50 characters"],
      },
      zipCode: {
        type: String,
        trim: true,
        maxlength: [10, "Zip code cannot exceed 10 characters"],
      },
      country: {
        type: String,
        trim: true,
        maxlength: [50, "Country name cannot exceed 50 characters"],
      },
    },
    preferences: {
      notifications: {
        type: Boolean,
        default: true,
      },
      newsletter: {
        type: Boolean,
        default: true,
      },
      theme: {
        type: String,
        enum: ["light", "dark"],
        default: "light",
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastLogin: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
UserSchema.pre('save', async function (next) {
  const user = this as HydratedDocument<IUser>;

  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  // user.password is string per IUser, but TS can be conservative here—cast just in case:
  user.password = await bcrypt.hash(user.password as string, salt);
  return next();
});

// ✅ comparePassword method: type `this` so TS knows password is string
UserSchema.methods.comparePassword = async function (candidate: string) {
  const user = this as HydratedDocument<IUser> & { password: string };
  // If password might be unselected elsewhere, guard (belt & suspenders):
  if (!user.password) {
    // If you ever call comparePassword without selecting password, throw a clear error
    throw new Error('Password not selected on user document');
  }
  return bcrypt.compare(candidate, user.password);
};

// Indexes
// UserSchema.index({ email: 1 });
UserSchema.index({ role: 1, isActive: 1 });

export default mongoose.model<IUser>("User", UserSchema);
