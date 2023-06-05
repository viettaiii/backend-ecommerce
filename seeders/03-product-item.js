"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */
    await queryInterface.bulkInsert("ProductItems", [
      {
        productId: 1,
        price: 1001,
        qtyInStock: 2,
        image: "bl...bla",
      },
      {
        productId: 2,
        price: 4,
        qtyInStock: 120,
        image: "bl...bla",
      },
      {
        productId: 3,
        price: 400,
        qtyInStock: 200,
        image: "bl...bla",
      },
      {
        productId: 4,
        price: 400,
        qtyInStock: 200,
        image: "bl...bla",
      },
     
      
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
     await queryInterface.bulkDelete('ProductItems', null, {});
  },
};
