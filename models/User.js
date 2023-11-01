import mongoose from "mongoose";
import { ROLES } from "../utils/constant.js";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: {
    type: String,
    default: "firstname",
  },
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
