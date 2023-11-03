import mongoose from "mongoose";
import { NOTE_STATUS } from "../utils/constant.js";

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    details: String,
    noteStatus: {
      type: String,
      enum: Object.values(NOTE_STATUS),
      default: NOTE_STATUS.PENDING,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Note", NoteSchema);
