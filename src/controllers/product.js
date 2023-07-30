const { NotFoundError, BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const { Product } = require("../models");
const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.status(200).json({
    data: products,
    message: "Get products successfully",
  });
};

const createProduct = async (req, res) => {};
const getProduct = async (req, res) => {};

const updateProduct = async (req, res) => {};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
};
