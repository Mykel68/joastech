import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connection.readyState !== 0) {
      console.log("MongoDB already connected");
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectDB;
