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
    await queryInterface.bulkInsert("ProductConfigs", [
      {
        variationOptionId: 1,
        productItemId: 1,
      },
      {
        variationOptionId: 2,
        productItemId: 1,
      },
      {
        variationOptionId: 3,
        productItemId: 1,
      },
      {
        variationOptionId: 4,
        productItemId: 1,
      },
      {
        variationOptionId: 1,
        productItemId: 2,
      },
      {
        variationOptionId: 2,
        productItemId: 2,
      },
      {
        variationOptionId: 3,
        productItemId: 2,
      },
      {
        variationOptionId: 4,
        productItemId: 2,
      },
      {
        variationOptionId: 1,
        productItemId: 3,
      },
      {
        variationOptionId: 2,
        productItemId: 3,
      },
      {
        variationOptionId: 3,
        productItemId: 3,
      },
      {
        variationOptionId: 4,
        productItemId: 3,
      },
      {
        variationOptionId: 1,
        productItemId: 4,
      },
      {
        variationOptionId: 2,
        productItemId: 4,
      },
      {
        variationOptionId: 3,
        productItemId: 4,
      },
      {
        variationOptionId: 4,
        productItemId: 4,
      },
      {
        variationOptionId: 1,
        productItemId: 5,
      },
      {
        variationOptionId: 2,
        productItemId: 5,
      },
      {
        variationOptionId: 3,
        productItemId: 5,
      },
      {
        variationOptionId: 4,
        productItemId: 5,
      },
      {
        variationOptionId: 1,
        productItemId: 6,
      },
      {
        variationOptionId: 2,
        productItemId: 6,
      },
      {
        variationOptionId: 3,
        productItemId: 6,
      },
      {
        variationOptionId: 4,
        productItemId: 6,
      },
      {
        variationOptionId: 1,
        productItemId: 7,
      },
      {
        variationOptionId: 2,
        productItemId: 7,
      },
      {
        variationOptionId: 3,
        productItemId: 7,
      },
      {
        variationOptionId: 4,
        productItemId: 7,
      },
      {
        variationOptionId: 1,
        productItemId: 8,
      },
      {
        variationOptionId: 2,
        productItemId: 8,
      },
      {
        variationOptionId: 3,
        productItemId: 8,
      },
      {
        variationOptionId: 4,
        productItemId: 8,
      },
      {
        variationOptionId: 1,
        productItemId: 9,
      },
      {
        variationOptionId: 2,
        productItemId: 9,
      },
      {
        variationOptionId: 3,
        productItemId: 9,
      },
      {
        variationOptionId: 4,
        productItemId: 9,
      },
      {
        variationOptionId: 1,
        productItemId: 10,
      },
      {
        variationOptionId: 2,
        productItemId: 10,
      },
      {
        variationOptionId: 3,
        productItemId: 10,
      },
      {
        variationOptionId: 4,
        productItemId: 10,
      },
      {
        variationOptionId: 1,
        productItemId: 11,
      },
      {
        variationOptionId: 2,
        productItemId: 11,
      },
      {
        variationOptionId: 3,
        productItemId: 11,
      },
      {
        variationOptionId: 4,
        productItemId: 11,
      },
      {
        variationOptionId: 1,
        productItemId: 12,
      },
      {
        variationOptionId: 2,
        productItemId: 12,
      },
      {
        variationOptionId: 3,
        productItemId: 12,
      },
      {
        variationOptionId: 4,
        productItemId: 12,
      },
      {
        variationOptionId: 1,
        productItemId: 13,
      },
      {
        variationOptionId: 2,
        productItemId: 13,
      },
      {
        variationOptionId: 3,
        productItemId: 13,
      },
      {
        variationOptionId: 4,
        productItemId: 13,
      },
      {
        variationOptionId: 1,
        productItemId: 14,
      },
      {
        variationOptionId: 2,
        productItemId: 14,
      },
      {
        variationOptionId: 3,
        productItemId: 14,
      },
      {
        variationOptionId: 4,
        productItemId: 14,
      },
      {
        variationOptionId: 1,
        productItemId: 15,
      },
      {
        variationOptionId: 2,
        productItemId: 15,
      },
      {
        variationOptionId: 3,
        productItemId: 15,
      },
      {
        variationOptionId: 4,
        productItemId: 15,
      },
      {
        variationOptionId: 1,
        productItemId: 16,
      },
      {
        variationOptionId: 2,
        productItemId: 16,
      },
      {
        variationOptionId: 3,
        productItemId: 16,
      },
      {
        variationOptionId: 4,
        productItemId: 16,
      },
      {
        variationOptionId: 1,
        productItemId: 17,
      },
      {
        variationOptionId: 2,
        productItemId: 17,
      },
      {
        variationOptionId: 3,
        productItemId: 17,
      },
      {
        variationOptionId: 4,
        productItemId: 17,
      },
      {
        variationOptionId: 1,
        productItemId: 18,
      },
      {
        variationOptionId: 2,
        productItemId: 18,
      },
      {
        variationOptionId: 3,
        productItemId: 18,
      },
      {
        variationOptionId: 4,
        productItemId: 18,
      },
      {
        variationOptionId: 1,
        productItemId: 19,
      },
      {
        variationOptionId: 2,
        productItemId: 19,
      },
      {
        variationOptionId: 3,
        productItemId: 19,
      },
      {
        variationOptionId: 4,
        productItemId: 19,
      },
      {
        variationOptionId: 1,
        productItemId: 20,
      },
      {
        variationOptionId: 2,
        productItemId: 20,
      },
      {
        variationOptionId: 3,
        productItemId: 20,
      },
      {
        variationOptionId: 4,
        productItemId: 20,
      },
      {
        variationOptionId: 1,
        productItemId: 21,
      },
      {
        variationOptionId: 2,
        productItemId: 21,
      },
      {
        variationOptionId: 3,
        productItemId: 21,
      },
      {
        variationOptionId: 4,
        productItemId: 21,
      },
      {
        variationOptionId: 1,
        productItemId: 22,
      },
      {
        variationOptionId: 2,
        productItemId: 22,
      },
      {
        variationOptionId: 3,
        productItemId: 22,
      },
      {
        variationOptionId: 4,
        productItemId: 22,
      },
      {
        variationOptionId: 1,
        productItemId: 23,
      },
      {
        variationOptionId: 2,
        productItemId: 23,
      },
      {
        variationOptionId: 3,
        productItemId: 23,
      },
      {
        variationOptionId: 4,
        productItemId: 23,
      },
      {
        variationOptionId: 1,
        productItemId: 24,
      },
      {
        variationOptionId: 2,
        productItemId: 24,
      },
      {
        variationOptionId: 3,
        productItemId: 24,
      },
      {
        variationOptionId: 4,
        productItemId: 24,
      },
      {
        variationOptionId: 1,
        productItemId: 25,
      },
      {
        variationOptionId: 2,
        productItemId: 25,
      },
      {
        variationOptionId: 3,
        productItemId: 25,
      },
      {
        variationOptionId: 4,
        productItemId: 25,
      },
      {
        variationOptionId: 1,
        productItemId: 26,
      },
      {
        variationOptionId: 2,
        productItemId: 26,
      },
      {
        variationOptionId: 3,
        productItemId: 26,
      },
      {
        variationOptionId: 4,
        productItemId: 26,
      },
      {
        variationOptionId: 1,
        productItemId: 27,
      },
      {
        variationOptionId: 2,
        productItemId: 27,
      },
      {
        variationOptionId: 3,
        productItemId: 27,
      },
      {
        variationOptionId: 4,
        productItemId: 27,
      },
      {
        variationOptionId: 1,
        productItemId: 28,
      },
      {
        variationOptionId: 2,
        productItemId: 28,
      },
      {
        variationOptionId: 3,
        productItemId: 28,
      },
      {
        variationOptionId: 4,
        productItemId: 28,
      },
      {
        variationOptionId: 1,
        productItemId: 29,
      },
      {
        variationOptionId: 2,
        productItemId: 29,
      },
      {
        variationOptionId: 3,
        productItemId: 29,
      },
      {
        variationOptionId: 4,
        productItemId: 29,
      },
      {
        variationOptionId: 1,
        productItemId: 30,
      },
      {
        variationOptionId: 2,
        productItemId: 30,
      },
      {
        variationOptionId: 3,
        productItemId: 30,
      },
      {
        variationOptionId: 4,
        productItemId: 30,
      },
      {
        variationOptionId: 1,
        productItemId: 31,
      },
      {
        variationOptionId: 2,
        productItemId: 31,
      },
      {
        variationOptionId: 3,
        productItemId: 31,
      },
      {
        variationOptionId: 4,
        productItemId: 31,
      },
      {
        variationOptionId: 1,
        productItemId: 32,
      },
      {
        variationOptionId: 2,
        productItemId: 32,
      },
      {
        variationOptionId: 3,
        productItemId: 32,
      },
      {
        variationOptionId: 4,
        productItemId: 32,
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
    await queryInterface.bulkDelete("ProductConfigs", null, {});
  },
};
