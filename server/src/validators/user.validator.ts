import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({ required_error: "Name is required." })
    .trim()
    .min(3, { message: "Name must be at least 3 characters." })
    .max(255, "Name must not exceed 255 characters."),

  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email({ message: "Invalid email address." })
    .min(3, { message: "Email must be at least 3 characters." })
    .max(255, "Email must not exceed 255 characters."),

  password: z
    .string({ required_error: "Password is required." })
    .min(6, { message: "Password must be at least 6 characters." })
    .max(1024, "Password must not exceed 1024 characters."),

  _id: z
    .string({ required_error: "ID is required." })
    .min(6, { message: "ID must be at least 6 characters." })
    .max(1024, "ID must not exceed 1024 characters."),

  photo: z
    .string({ required_error: "Photo is required." })
});

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required." })
    .trim()
    .email({ message: "Invalid email address." })
    .min(3, { message: "Email must be at least 3 characters." })
    .max(255, "Email must not exceed 255 characters."),

  password: z
    .string({ required_error: "Password is required." })
    .min(6, { message: "Password must be at least 6 characters." })
    .max(1024, "Password must not exceed 1024 characters."),
});
