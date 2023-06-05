'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
   await queryInterface.bulkInsert('Categories',[
     {
       id:1,
       name:"Iphone",
       
     },
     {
      id:2,
       name:"Ipad",
       
     },
     {
      id:3,
       name:"Apple Watch",
       
     },
     {
      id:4,
       name:"Macbook",
     }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     *
     */
     await queryInterface.bulkDelete('Categories', null, {});
  }
};
