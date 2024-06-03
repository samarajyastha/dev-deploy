import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: false,
  },
  category: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: Date.now(),
  },
});

export default mongoose.model("Product", productSchema);
