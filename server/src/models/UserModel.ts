import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextFunction } from "express";

interface IUser extends Document {
  _id: string;
  photo: string;
  role: "admin" | "user";
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  generateToken: () => Promise<string>;
}

const userSchema = new Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
  } catch (error: any) {
    next(error);
  }
});

userSchema.methods.generateToken = async function (next: NextFunction) {
  try {
    return jwt.sign(
      {
        userID: this._id,
        email: this.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "15d" }
    );
  } catch (error) {
    next(error);
  }
};

export const User = model<IUser>("User", userSchema)