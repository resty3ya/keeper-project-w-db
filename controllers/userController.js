import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import Note from "../models/Note.js";
import { hashPassword } from "../utils/passwordUtils.js";

// GET ALL USERS
// FOR ADMIN USERS
export const getAllUsers = async (req, res) => {
  const { name, email, lastName, role } = req.query;

  const user = await User.find(req.query);

  res.status(StatusCodes.OK).json({ user });
};

// GET USER
export const getCurrentUser = async (req, res) => {
  // IF YOU WANT TO GET THE USER WITHOUT THE ID ON THE URL
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();

  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

// UPDATE USER
export const updateUser = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const newUser = { ...req.body, hashedPassword };

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  // console.log("THIS IS UPDATED USER", { newUser });

  res.status(StatusCodes.OK).json({ message: "user modified", updatedUser });
};

// DELETE USER
// FOR ADMIN USERS
export const deleteUser = async (req, res) => {
  const removedUser = await User.findByIdAndDelete(req.params.id);

  res.status(StatusCodes.OK).json({ message: "user deleted" });
};
