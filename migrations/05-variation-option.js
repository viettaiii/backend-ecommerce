"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("VariationOptions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      variationId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Variations",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
      }, createdAt: {
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
    await queryInterface.dropTable("VariationOptions");
  },
};
