import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnAuthenticatedError,
} from "../errors/customErrors.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  res.send("register user");
};

export const login = async (req, res) => {
  res.send("login user");
};

export const logout = async (req, res) => {
  res.send("logout user");
};
