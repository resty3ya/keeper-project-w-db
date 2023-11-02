import { Router } from "express";
const router = Router();
import {
  getAllNotes,
  createNote,
  updateNote,
  getNote,
  deleteNote,
} from "../controllers/noteController.js";

router.route("/").get(getAllNotes).post(createNote);

router.route("/:id").get(getNote).patch(updateNote).delete(deleteNote);

export default router;
