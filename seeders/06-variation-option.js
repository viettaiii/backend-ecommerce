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
        value: "Red",
      },
      {
        variationId: 1,
        value: "Blue",
      },
      {
        variationId: 1,
        value: "Green",
      },
      {
        variationId: 1,
        value: "Yello",
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
