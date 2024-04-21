import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGO CONNECTION SUCCESS");
  } catch (error) {
    console.log("MONGO CONNECTION FAILED: ", error);
  }
};
