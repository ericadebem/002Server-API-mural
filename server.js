import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { muralRouter } from "./router.js";

dotenv.config();
const app = express();
const DB_KEY = process.env.DB_KEY;
const PORT = 5050;
const mongooseOptions = {
  useNewParser: true,
  unifiedTopology: true,
};

const baseUrl = "/api";

app.use(cors());
app.use(express.json());
app.use(`${baseUrl}`, muralRouter);

const startServer = async () => {
  mongoose.connect(DB_KEY);
  app.listen(PORT, () => {
    console.log("server is listening on port ", PORT);
  });
};

startServer();
