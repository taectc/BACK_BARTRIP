'use strict'

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
         */
        return queryInterface.bulkInsert('user_drinks', [
            {
                drink_id: 1,
                user_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                drink_id: 2,
                user_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                drink_id: 3,
                user_id: 1,
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                drink_id: 1,
                user_id: 2,
                created_at: new Date(),
                updated_at: new Date(),
            },

            {
                drink_id: 1,
                user_id: 3,
                created_at: new Date(),
                updated_at: new Date(),
            },
        ])
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('users', null, {})
    },
}
