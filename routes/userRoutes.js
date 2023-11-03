import { Router } from "express";
const router = Router();
import {
  getAllUsers,
  getCurrentUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

router.get("/currentUser", getCurrentUser);
router.patch("/updateUser", updateUser);

// get all users with admin access
router.get("/admin/allUsers", getAllUsers);

// delete user with admin access
router.delete("/admin/:id").delete(deleteUser);

export default router;
