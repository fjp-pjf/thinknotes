import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://feminjustin07_db_user:XjZizGTqVT9kd2nF@cluster0.pqemzrw.mongodb.net/?appName=Cluster0"
    );
    console.log("Connected to mongoDB successfully");
  } catch (error) {
    console.error("Error connecting to mongoDB");
  }
};
