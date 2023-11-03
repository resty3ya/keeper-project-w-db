import User from "../models/User.js";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  UnAuthenticatedError,
} from "../errors/customErrors.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  // to run the passwordUtils and make the password hashed
  // make sure this function is on top
  const hashedPassword = await hashPassword(req.body.password);
  // destructure
  req.body.password = hashedPassword;

  const user = await User.create(req.body);

  // Status Code 201
  res.status(StatusCodes.CREATED).json({ msg: "user created", user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // this validates the user's password
  const isValidUser = user && (await comparePassword(password, user.password));

  if (!isValidUser) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  // this is the token for validity of login

  // dito nagstart ang userId na nsa update user din
  const token = createJWT({ userId: user._id, role: user.role });

  console.log({ token });

  const oneDay = 1000 * 60 * 60 * 24;
  // THIS IS HOW YOU SETUP COOKIE
  res.cookie("cookie", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "login user", user });
};

export const logout = async (req, res) => {
  res.cookie("cookie", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out" });
};
