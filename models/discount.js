"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "productId",
        as: "product",
      });
    }
  }
  Discount.init(
    {
      discount: {
        type: DataTypes.INTEGER,
      },
      startDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      endDate: {
        type: DataTypes.DATE,
        defaultValue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      },
    },
    {   timestamps: true,
      createdAt: false, 
      updatedAt: false, sequelize, modelName: "Discount" }
  );
  return Discount;
};
