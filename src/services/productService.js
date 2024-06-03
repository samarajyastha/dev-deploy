import Product from "../models/Product.js";

const getAllProducts = async (data) => {
  const filter = data?.filter ? JSON.parse(filter) : {};
  const limit = data?.limit ?? 10;
  const page = data?.page ?? 1;
  const sort = data?.sort ? JSON.parse(sort) : {};

  return await Product.find(filter)
    .sort(sort)
    .limit(limit)
    .skip((page - 1) * limit);
};

const getProductById = async (id) => {
  return await Product.findById(id);
};

const createProduct = async (productData) => {
  try {
    return await Product.create(productData);
  } catch (error) {
    throw error;
  }
};

const updateProduct = (id, productData) => {
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return;

  product.name = productData.name;
  product.price = productData.price;

  return product;
};

const deleteProduct = async (id) => {
  try {
    const product = await Product.findById(id);

    if (product == null) throw new Error("Product not found");

    return "success";
  } catch (error) {
    throw error;
  }
};

export default {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
};
