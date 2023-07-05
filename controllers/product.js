
const { NotFoundError, BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const getProducts = async (req, res) => {};

const createProduct = async (req, res) => {};
const getProduct = async (req, res) => {};

const updateProduct = async (req, res) => {};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
};
