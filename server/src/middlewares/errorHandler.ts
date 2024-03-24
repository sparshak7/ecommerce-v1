import { Response, Request, NextFunction } from "express";

type errorType = {
  status?: number,
  message?: string,
}

export const errorHandler = (err: errorType, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "BACKEND ERROR";

  return res.status(status).json({ message });
};
