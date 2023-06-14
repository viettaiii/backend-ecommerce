"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, { foreignKey: "categoryId", as: "product" });
    }
  }
  Category.init(
    {
      name: {
        type: DataTypes.ENUM,
        values: ["Iphone", "Macbook", "Apple Watch", "Ipad"],
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: true,
      sequelize,
      modelName: "Category",
    }
  );
  return Category;
};
