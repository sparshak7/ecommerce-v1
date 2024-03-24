import { Router } from "express";
import { getAllUsers, register } from "../controllers/user.controller.js";
import { validate } from "../middlewares/validator.js";
import { registerSchema } from "../validators/user.validator.js";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.get("/all", getAllUsers);

export default router;
