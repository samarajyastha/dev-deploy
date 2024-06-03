import express from "express";

import productController from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", productController.getAllProducts);

// Get product by ID
router.get("/:id", productController.getProductById);

// Create a new product
router.post("/", productController.createProduct);

// Update an existing product
router.put("/:id", productController.updateProduct);

// Delete a product
router.delete("/:id", productController.deleteProduct);

export default router;
