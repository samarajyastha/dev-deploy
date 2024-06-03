import productService from "../services/productService.js";

const getAllProducts = async (req, res) => {
  const query = req.query;

  const products = await productService.getAllProducts(query);

  res.json(products);
};

const getProductById = async (req, res) => {
  const product = await productService.getProductById(req.params.id);

  if (!product) return res.status(404).send("Product not found");

  res.json(product);
};

const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateProduct = (req, res) => {
  const updatedProduct = productService.updateProduct(req.params.id, req.body);

  if (!updatedProduct) return res.status(404).send("Product not found");

  res.json(updatedProduct);
};

const deleteProduct = async (req, res) => {
  try {
    await productService.deleteProduct(req.params.id);

    res.send("Product deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
};
