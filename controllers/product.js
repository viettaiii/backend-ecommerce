const {
  Product,
  Category,
  ProductConfig,
  VariationOption,
  ProductItem,
  sequelize,
} = require("../models");
const { NotFoundError, BadRequestError } = require("../errors");
const { StatusCodes } = require("http-status-codes");
const { Op , transaction } = require("sequelize");
const getProducts = async (req, res) => {
  const { name, category, color, discount, numericFillters, sort } = req.query;
  const queryProduct = {};
  const queryColor = {};
  const order = [];
  if (name) queryProduct.name = { [Op.like]: `%${name}%` };
  if (category) queryProduct.category = { [Op.like]: category };
  if (discount === "true") queryProduct.discount = { [Op.ne]: 0 };
  if (numericFillters) {
    const regex = /\b(>=|<=|=|>|<)\b/g;
    const fillterList = numericFillters.replace(regex, (match) => `-${match}-`);
    const [field, operate, value] = fillterList.split("-");
    switch (operate) {
      case ">":
        queryProduct[field] = { [Op.gt]: value };
        break;
      case ">=":
        queryProduct[field] = { [Op.gte]: value };
        break;
      case "=":
        queryProduct[field] = { [Op.eq]: value };
        break;
      case "<":
        queryProduct[field] = { [Op.lt]: value };
        break;
      case "<=":
        queryProduct[field] = { [Op.lte]: value };
        break;
      default:
        return;
    }
  }
  if (color) queryColor.value = { [Op.like]: color };
  if (sort) {
    let desc = [];
    let asc = [];
    sort.split(",").forEach((item) => {
      if (item.startsWith("-")) {
        asc.push(item.replace("-", ""));
      } else {
        desc.push(item);
      }
    });
    if (asc.length > 0) {
      asc.push("ASC");
      order.push(asc);
    }
    if (desc.length > 0) {
      desc.push("DESC");
      order.push();
    }
  } 
  // else {
  //   order.push(["createdAt", "desc"]);
  // }
  const page = Number.parseInt(req.query.page || 1);
  const limit = Number.parseInt(req.query.limit || 8);
  const offset = (page - 1) * limit;
  const { count, rows } = await Product.findAndCountAll({
    where: queryProduct,
    attributes: { exclude: ["categoryId"] },
    order,
    limit,
    offset,
    include: [
      {
        model: Category,
        as: "category",
        attributes: { exclude: ["createdAt", "updatedAt"] },
      },
      {
        model: ProductItem,
        as: "productItem",
        attributes: { exclude: ["createdAt", "updatedAt", "productId"] },
        include: {
          model: ProductConfig,
          as: "productConfig",
          attributes: { exclude: ["productItemId", "variationOptionId"] },
          include: {
            where: queryColor,
            model: VariationOption,
            as: "variationOption",
          },
        },
      },
    ],
  });
  const total_pages = Math.ceil(count / limit);
  res
    .status(StatusCodes.OK)
    .json({ page, per_page: limit, total: count, total_pages, data: rows });
};

const createProduct = async (req, res) => {
  const transaction = await transaction();
  const product = await Product.create(
    { ...req.body },
    {
      include: [
        {
          model: ProductItem,
          as: "productItem",
          include: [{ model: ProductConfig, as: "productConfig" }],
        },
      ],
      transaction,
    }
  );
  const allModelsCreated = await transaction.commit();
  if (allModelsCreated) {
    throw new BadRequestError(`Error in produce creating models`);
  }
  res.status(StatusCodes.CREATED).json({ product });
};
const getProductDetail = async (req, res) => {};

module.exports = {
  getProducts,
  getProductDetail,
  createProduct,
};
