'use strict';

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
    */
     await queryInterface.bulkInsert('Users', [
      {
        name: 'Alex',
        password: '123',
        eMail: 'sndiw@ya.ru',
        city: 'Moscow',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Sasha',
        password: '123',
        eMail: 'sndiw@ya.ru',
        city: 'Moscow',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
