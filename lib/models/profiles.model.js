import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: 100,
    },
    age: {
      type: Number,
      required: true,
    },
    occupation: {
      type: String,
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
  {
    timestamps: true,
  },
);

export const profileModel =
  mongoose.models.profiles || mongoose.model("profiles", profileSchema);
