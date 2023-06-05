"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });

      this.hasOne(models.Discount, { foreignKey: "productId", as: "discount" });

      this.hasMany(models.ProductItem, {
        foreignKey: "productId",
        as: "productItem",
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      desc: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    },
    { timestamps: true, sequelize, modelName: "Product" }
  );
  return Product;
};
