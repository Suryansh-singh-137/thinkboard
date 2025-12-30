import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URL;
    if (!uri) {
      throw new Error("MONGO_URL environment variable is not set");
    }

    await mongoose.connect(uri); // no options needed for Mongoose 7+

    console.log("Connected to MongoDB");
  } catch (e) {
    console.log("something went wrong while connecting", e);
  }
};

export default connectDB;
