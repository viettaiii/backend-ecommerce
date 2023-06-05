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
        qtyInStock: 2,
        image: "bl...bla",
      },
      {
        productId: 2,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 3,
        qtyInStock: 25,
        image: "bl...bla",
      },
      {
        productId: 4,
        qtyInStock: 50,
        image: "bl...bla",
      },
      {
        productId: 5,
        qtyInStock: 10,
        image: "bl...bla",
      },
     
      {
        productId: 6,
        qtyInStock: 100,
        image: "bl...bla",
      },
     
      {
        productId: 7,
        qtyInStock: 50,
        image: "bl...bla",
      },
      {
        productId: 8,
        qtyInStock: 510,
        image: "bl...bla",
      },
      {
        productId: 9,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 10,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 11,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 12,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 13,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 14,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 15,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 16,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 17,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 18,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 19,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 20,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 21,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 22,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 23,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 24,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 25,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 26,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 27,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 28,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 29,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 30,
        qtyInStock: 10,
        image: "bl...bla",
      },
      {
        productId: 31,
        qtyInStock: 20,
        image: "bl...bla",
      },
      {
        productId: 32,
        qtyInStock: 20,
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
