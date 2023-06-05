"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Variation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.VariationOption, {
        foreignKey: "variationId",
        as: "VariationOption",
      });
      // this.belongsTo(models.Category, {
      //   foreignKey: "categoryId",
      //   as: "category",
      // });
    }
  }
  Variation.init(
    {
      name: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.ENUM,
        values: ["color", "capacity"],
      },
    },
    {   timestamps: true,
      createdAt: false, 
      updatedAt: false, sequelize, modelName: "Variation" }
  );
  return Variation;
};
