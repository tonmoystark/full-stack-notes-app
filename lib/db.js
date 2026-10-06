import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB 🟢");
  } catch (error) {
    console.error(error + "Failed to connect to MongoDB 🔴");
  }
}

export async function connectDBforProfile() {
  try {
    await mongoose.connect(process.env.MONGODB_URI_TWO);
    console.log("Connected to MongoDB for profile 🟢");
  } catch (error) {
    console.error(error + "Failed to connect to MongoDB for profile 🔴");
  }
}
