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
        allowNull: false,
        max: 200,
      },
      desc: {
        type: DataTypes.STRING,
        allowNull: true,
        min: 6,
        max: 500,
      },
      discount: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      guarantee: {
        type: DataTypes.INTEGER,
        defaultValue: 12,
      },
      price: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCount: function (options) {
          if (this._scope.include && this._scope.include.length > 0) {
            options.distinct = true;
            options.col =
              this._scope.col ||
              options.col ||
              `"${this.options.name.singular}".id`;
          }

          if (options.include && options.include.length > 0) {
            options.include = null;
          }
        },
      },

      timestamps: true,
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
