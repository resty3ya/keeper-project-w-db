import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";

// GET ALL USERS
export const getAllUsers = async (req, res) => {
  res.send("get all users");
};

// GET USER
export const getCurrentUser = async (req, res) => {
  res.send("get current user");
};

// UPDATE USER
export const updateUser = async (req, res) => {
  res.send("user update");
};

// DELETE USER
export const deleteUser = async (req, res) => {
  res.send("user deleted");
};
