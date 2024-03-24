import { NextFunction, Request, Response } from "express";

export interface NewUserReqBody {
  username: string;
  password: string;
  email: string;
  photo: string;
  _id: string;
}

