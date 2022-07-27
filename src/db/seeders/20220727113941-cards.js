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
     await queryInterface.bulkInsert('Cards', [
      {
        nameCard: 'Славный Конец',
        status: '123',
        cost: '267',
        img: 'Славный конец.png',
        buyer_id: '1',
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameCard: 'Приближение Второго Солнца',
        status: '123',
        cost: '317',
        img: 'Приближение Второго Солнца.png',
        buyer_id: '1',
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameCard: 'Дверь в никуда',
        status: '123',
        cost: '999',
        img: 'Дверь в никуда.jpeg',
        buyer_id: '1',
        user_id: '2',
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
     await queryInterface.bulkDelete('Cards', null, {});
  }
};
