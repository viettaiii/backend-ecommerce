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
          variationOptionId:1,
          productItemId:1
        },
        {
          variationOptionId:2,
          productItemId:1
        },
        {
          variationOptionId:1,
          productItemId:2
        },
        {
          variationOptionId:1,
          productItemId:3
        },
        {
          variationOptionId:3,
          productItemId:4
        },
        {
          variationOptionId:4,
          productItemId:4
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
