"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VariationOption extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Variation, {
        foreignKey: "variationId",
        as: "variation",
      });
      this.hasMany(models.ProductConfig, {
        foreignKey: "variationOptionId",
        as: "productConfig",
      });
    }
  }
  VariationOption.init(
    {
      value: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      createdAt: false,
      updatedAt: false,
      sequelize,
      modelName: "VariationOption",
    }
  );
  return VariationOption;
};
