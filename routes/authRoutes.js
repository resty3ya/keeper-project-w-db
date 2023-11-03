import { Router } from "express";
const router = Router();
import { register, login, logout } from "../controllers/authController.js";
import {
  validateLoginUser,
  validateRegisterInput,
} from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
router.post("/login", validateLoginUser, login);
router.get("/logout", logout);

export default router;
