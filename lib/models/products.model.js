import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      max: 100,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    description: {
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

export const productsModel =
  mongoose.models.products || mongoose.model("products", productSchema);
