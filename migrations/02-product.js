"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        min: 5,
        max: 200,
      },
      desc: {
        type: Sequelize.STRING,
        allowNull: true,
        min: 6,
        max: 200,
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      guarantee: {
        type: Sequelize.INTEGER,
        defaultValue: 12,
      },
      price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          field: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
