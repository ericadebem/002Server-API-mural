import mongoose from "mongoose";

const MuralSchema = new mongoose.Schema(
  {
    title: String,
    message: String,
  },
  {
    versionKey: false,
    collection: "mural",
  }
);

export const Mural = mongoose.model("Mural", MuralSchema);
