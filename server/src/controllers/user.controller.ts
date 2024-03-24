import { NextFunction, Request, Response } from "express";
import { User } from "../models/UserModel.js";
import { NewUserReqBody } from "../types/types.js";

export const register = async (
  req: Request<{}, {}, NewUserReqBody>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, email, password, photo, _id } = req.body;

    const validID = await User.findById(_id);

    if (validID) {
      return res.status(201).json({
        message: `Welcome, ${validID.username}`,
        token: await validID.generateToken(),
        userID: validID._id.toString(),
      });
    }

    const validUser = await User.findOne({ email });

    if (validUser) {
      const err = {
        message: "Account already exists. Please login instead.",
        status: 400,
      };
      next(err);
      return;
    }

    const data = await User.create({ email, password, username, photo, _id });
    return res.status(201).json({
      message: `Welcome, ${data.username}`,
      // token: await data.generateToken(),
      // userID: data._id.toString(),
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const users = await User.find({});
  return res.status(200).json({users});
};
