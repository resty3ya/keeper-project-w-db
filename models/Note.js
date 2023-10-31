import mongoose from "mongoose";
import { NOTE_STATUS } from "../utils/constant.js";



const NoteSchema = new mongoose.Schema(
    {
        users: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        title: String,
        details: String,
        noteStatus: {
            type: String,
            enum: Object.values(NOTE_STATUS),
            default: NOTE_STATUS.PENDING
        }
    }
    {
        timestamps: true,
    }
)

export default mongoose.model("Note", NoteSchema)
