import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";
// ITO ANG NAG POPROTECT NOT TO ACCESS BY ALL PERSONS ANG LAHAT NG NOTES
import { authenticateUser } from "./middleware/authMiddleware.js";

const PORT = process.env.PORT || 3500;

// routes
import userRoutes from "./routes/userRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";

// middleware
// express.json should always on the top of the routes
// so that all the value from the data models will be read
app.use(express.json());
// this populates req.cookies with an object keyed by the cookie names and also it allows us to access the cookie
app.use(cookieParser());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/users", authenticateUser, userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/notes", authenticateUser, noteRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.get("/", (req, res) => res.send("Hello World"));

// middleware
app.use(errorHandlerMiddleware);

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
