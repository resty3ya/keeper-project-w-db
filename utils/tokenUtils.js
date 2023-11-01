import { cookie } from "express-validator";
import jwt from "jsonwebtoken";

export const createJWT = (payload) => {
  const token = jwt.sign(payload.process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return token;
};

export const verifyJWT = (cookie) => {
  //decoded is the payload
  const decoded = jwt.verify(cookie, process.env.JWT_SECRET);
  return decoded;
};
