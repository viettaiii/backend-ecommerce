"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.ProductConfig, {
        foreignKey: "productItemId",
        as: "productConfig",
      });
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }
  ProductItem.init(
    {
      image: {
        type: DataTypes.STRING,
      },
      qtyInStock: {
        type: DataTypes.INTEGER,
      },
    },
    { timestamps: true, sequelize, modelName: "ProductItem" }
  );
  return ProductItem;
};
