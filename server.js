import "express-async-errors";
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";

import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

const PORT = process.env.PORT || 3500;

//middleware
app.use(express.json());
app.use(errorHandlerMiddleware);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.get("/", (req, res) => res.send("Hello World"));

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(PORT, () => {
    console.log(`server running in port ${PORT}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
