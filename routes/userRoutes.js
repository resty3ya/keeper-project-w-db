import { Router } from "express";
const router = Router();
import {
  getAllUsers,
  getCurrentUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermission } from "../middleware/authMiddleware.js";

router.get("/currentUser", getCurrentUser);
router.patch("/updateUser", validateUpdateUserInput, updateUser);

// get all users with admin access
router.get("/admin/allUsers", authorizePermission("admin"), getAllUsers);

// delete user with admin access
router.delete("/admin/:id", authorizePermission("admin"), deleteUser);

export default router;
