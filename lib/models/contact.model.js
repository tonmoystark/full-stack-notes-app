import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      max: 100,
    },
    status: {
      type: String,
      default: "Pending",
      required: true,
      trim: true,
      max: 100,
    },
    message: {
      type: String,
      required: true,
      trim: true,
      max: 700,
    },
  },
  { timestamps: true },
);

export const contactModel =
  mongoose.models.contact || mongoose.model("contact", contactSchema);
