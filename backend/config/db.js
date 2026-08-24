import mongoose from "mongoose";
import connectCloudinary from "./cloudinary.js";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB Connected Successfully");
  });

  await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
  await connectCloudinary();
};

export default connectDB;