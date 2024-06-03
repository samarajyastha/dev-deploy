import express from "express";
import bodyParser from "body-parser";
import connectDB from "./db.js";
import productRoutes from "./routes/products.js";
import dotenv from 'dotenv';

const app = express();

dotenv.config()

connectDB();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send(`Server is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
