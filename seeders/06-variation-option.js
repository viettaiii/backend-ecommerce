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
    await queryInterface.bulkInsert("VariationOptions", [
      {
        variationId: 1,
        value: "red",
      },
      {
        variationId: 1,
        value: "blue",
      },
      {
        variationId: 1,
        value: "green",
      },
      {
        variationId: 1,
        value: "yellow",
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
    await queryInterface.bulkDelete("VariationOptions", null, {});
  },
};
