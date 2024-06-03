import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_CONNECTION}/Code-it`);

    console.log("Mongodb connected...");
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

export default connectDB;
