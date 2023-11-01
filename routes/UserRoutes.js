import { Router } from "express";
const router = Router();
import {
  getAllUsers,
  getCurrentUser,
  updateUser,
  deleteUser,
  createUser,
} from "../controllers/userController";
