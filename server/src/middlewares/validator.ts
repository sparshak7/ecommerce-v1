import { NextFunction, Request, Response } from "express";
import { Schema } from "zod";

type validatorError = {
  message: string;
  status: number;
}

export const validate =
  (schema: Schema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parseBody = await schema.parseAsync(req.body);
      req.body = parseBody;
      next();
    } catch (error: any) {
      const message = error.errors[0].message;
      console.log(message);
      const err: validatorError = {
        message,
        status: 400,
      };
      next(err);
    }
  };
