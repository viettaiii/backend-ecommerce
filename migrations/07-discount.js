"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Discounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      startDate: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      endDate: {
        type: Sequelize.DATE,
        defaultValue: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Discounts");
  },
};
