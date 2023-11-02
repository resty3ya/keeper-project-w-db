import mongoose from "mongoose";
import { ROLES } from "../utils/constant.js";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastname",
  },
  role: {
    type: String,
    enum: Object.values(ROLES),
    default: ROLES.USER,
  },
});

export default mongoose.model("User", UserSchema);
