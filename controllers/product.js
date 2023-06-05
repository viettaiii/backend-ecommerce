const {
  Product,
  Category,
  ProductConfig,
  VariationOption,
  Discount,
  ProductItem,
} = require("../models");
const { NotFoundError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { Op } = require("sequelize");
const getProducts = async (req, res) => {
  // const { name, category, color, quantity } = req.query;
  // const queryObjectProduct = {};
  // const queryCategory = {};
  // const variationOption = {};
  // if (name) {
  //   queryObjectProduct.name = { [Op.like]: `%${name}%` };
  // }
  // if (category) {
  //   queryCategory.name = category;
  // }
  const products = await Product.findAll({
    include: [
      {
        model: ProductItem,
        as: "productItem",
        include: {
          model: ProductConfig,
          as: "productConfig",
          include: { model: VariationOption, as: "variationOption" },
        },
      },
      "discount",
    ],
  });
  res.status(StatusCodes.OK).json({ products });
};

const createProduct = async (req, res) => {};
const getProductDetail = async (req, res) => {};

module.exports = {
  getProducts,
  getProductDetail,
  createProduct,
};
