import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
    },
    content: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const noteModel =
  mongoose.models.notes || mongoose.model("notes", noteSchema);
