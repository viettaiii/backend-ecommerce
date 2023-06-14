"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ProductConfigs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      variationOptionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "VariationOptions",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      productItemId: {
        type: Sequelize.INTEGER,
        references: {
          model: "ProductItems",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ProductConfigs");
  },
};
