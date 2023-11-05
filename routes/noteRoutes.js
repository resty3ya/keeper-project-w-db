import { Router } from "express";
const router = Router();
import {
  validateIdParam,
  validateNoteInput,
} from "../middleware/validationMiddleware.js";
import {
  getAllNotes,
  createNote,
  updateNote,
  getNote,
  deleteNote,
} from "../controllers/noteController.js";
import { authorizePermission } from "../middleware/authMiddleware.js";

router.route("/").get(getAllNotes).post(validateNoteInput, createNote);

router
  .route("/:id")
  .get(validateIdParam, getNote)
  .patch(validateNoteInput, validateIdParam, updateNote)
  .delete(deleteNote);

export default router;
