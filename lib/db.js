import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB 🟢");
  } catch (error) {
    console.error(error + "Failed to connect to MongoDB 🔴");
  }
}
