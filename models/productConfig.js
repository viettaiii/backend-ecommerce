"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductConfig extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.VariationOption, {
        foreignKey: "variationOptionId",
        as: "variationOption",
      });
      this.belongsTo(models.ProductItem, {
        foreignKey: "productItemId",
        as: "productItem",
      });
    }
  }
  ProductConfig.init(
    {
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
      modelName: "ProductConfig",
    }
  );
  return ProductConfig;
};
