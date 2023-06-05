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
    await queryInterface.bulkInsert("Products", [
      {
        id: 1,
        name: "Iphone 13",
        desc: "bla...1",
        image: "bla...",
        categoryId: 1,
        price: 1000,
      },
      {
        id: 2,
        name: "Ipad 13",
        desc: "bla...",
        image: "bla...",
        categoryId: 2,
        price: 100,
      },
      {
        id: 3,
        name: "Apple Watch",
        desc: "bla...",
        image: "bla...",
        categoryId: 3,
        price: 200,
      },
      {
        id: 4,
        name: "Macbook",
        desc: "bla...",
        image: "bla...",
        categoryId: 4,
        price: 100,
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
    await queryInterface.bulkDelete("Products", null, {});
  },
};
