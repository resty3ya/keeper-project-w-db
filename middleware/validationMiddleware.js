import { body, param, validationResult } from "express-validator";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
  UnAuthorizedError,
} from "../errors/customErrors.js";
import { NOTE_STATUS, ROLES } from "../utils/constant.js";
import Note from "../models/Note.js";
import mongoose from "mongoose";
import User from "../models/User.js";

const validationMiddleware = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);

        // THIS IS FOR GLOBAL ERROR

        if (errorMessages[0].startsWith("no note")) {
          throw new NotFoundError(errorMessages);
        }
        if (errorMessages[0].startsWith("not authorized")) {
          throw new UnAuthorizedError("not authorized to access this route");
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

// VALIDATE CREATE AND UPDATE NOTE
export const validateNoteInput = validationMiddleware([
  body("title").notEmpty().withMessage("title is required"),
  body("details").notEmpty().withMessage("details is required"),
  body("noteStatus")
    .isIn(Object.values(NOTE_STATUS))
    .withMessage("invalid status value"),
]);

// VALIDATE NOTE ID
export const validateIdParam = validationMiddleware([
  param("id").custom(async (value, { req }) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDb Id");

    // THIS IS TO CHECK IF THE NOTE ID IS EXISTING
    const note = await Note.findById(value);

    if (!note) throw new NotFoundError(`no note with id ${value}`);

    // THIS IS TO PREVENT OTHER USERS TO ACCESS NOTES OF THE OTHER
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === note.createdBy.toString();

    if (!isAdmin && isOwner) {
      throw new UnAuthorizedError("not authorized to access this route");
    }
  }),
]);

// VALIDATE REGISTRATION
export const validateRegisterInput = validationMiddleware([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) throw new BadRequestError("email already exists");
    })
    .toLowerCase(),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be atleast 8 characters long"),
]);

// VALIDATE LOGIN USER
export const validateLoginUser = validationMiddleware([
  body("email")
    .notEmpty()
    .withMessage("email is require")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);

// VALIDATE USER UPDATE INPUT
export const validateUpdateUserInput = validationMiddleware([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is require")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new BadRequestError("email already exists");
      }
    }),
  // // validate password FOR PASSWORD UPDATE PHASE 2 NA!!
  // body("password").custom(async (password, { req }) => {
  //   const currentPassword = await User.findOne({ password });

  //   const getPrevPassword = currentPassword === null && req.body.password;
  //   console.log({ req });
  //   return getPrevPassword;
  // }),
  body("lastName").notEmpty().withMessage("lastname is required"),
]);
