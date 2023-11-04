import {
  UnAuthenticatedError,
  UnAuthorizedError,
  BadRequestError,
} from "../errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  const { cookie } = req.cookies;
  if (!cookie) throw new UnAuthenticatedError("authentication invalid");
  try {
    const { userId, role } = verifyJWT(cookie);
    req.user = { userId, role };

    console.log("THIS IS FROM AUTH MIDDLEWARE", req.user);
    next();
  } catch (error) {
    throw new UnAuthenticatedError("authentication invalid");
  }

  console.log(req.cookies);
};

export const authorizePermission = (...role) => {
  console.log(role);

  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      throw new UnAuthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
