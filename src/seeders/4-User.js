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
        return queryInterface.bulkInsert('users', [
            {
                email: 'nine@mail.com',
                password:
                    '$2a$12$lM2eCz6ysF0S2JwGnMRCo.LMsF18UMT/6BP1imq2CgWZUpMvCYnFa',

                nickname: 'nine',

                created_at: new Date(),
                updated_at: new Date(),
                avatar_id: 1,
                drink_id: 2,
                hat_id: 3,
            },
            {
                email: 'tae@mail.com',
                password:
                    '$2a$12$e3YcFCg5rAQby8SW.6dzTuhLPOWNws3aC/Ob7uxCGOrwGxQO0RH9O',

                nickname: 'tae',

                created_at: new Date(),
                updated_at: new Date(),
                avatar_id: 1,
                drink_id: 2,
                hat_id: 1,
            },
            {
                email: 'tong@mail.com',
                password:
                    '$2a$12$2J59WuGq4wzDrzKYxOBIOuDYujRsWkZs/I7Jp2quf8qAtabNL9vfK',

                nickname: 'tong',

                created_at: new Date(),
                updated_at: new Date(),
                avatar_id: 1,
                drink_id: 1,
                hat_id: 1,
            },

            {
                email: 'admin@mail.com',
                password:
                    '$2a$12$OEHWYjj/eRi/scRaklDjvuR89hVr7beU54hAfGwMt0qYz26n4z1ze',
                nickname: 'admin',
                is_admin: '1',
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
