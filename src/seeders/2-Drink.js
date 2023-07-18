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
        return queryInterface.bulkInsert('drinks', [
            {
                name: 'Beer',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688129034/qwh46ybyuy0ux9vsekvv.svg',
                price: '30',
                description: 'Beer',
                api_id: 'price_1NOcDFKltfnBEaa8022DRie9',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'กาแฟ',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688222118/uro7zo292we8dhbc7tqo.svg',
                price: '30',
                description: 'กาแฟ',
                api_id: 'price_1NP6CrKltfnBEaa8kT5r9HNH',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'ชานม',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688222139/wdger6vyplhdgdwitkes.svg',
                price: '30',
                api_id: 'price_1NP6GwKltfnBEaa8Z5IEGf7i',
                description: 'นมแม่มึง',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'เขียวมินต์',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688222159/exmsedz7ggwblncsjcfq.svg',
                price: '30',
                api_id: 'price_1NP6DJKltfnBEaa8sk4FQPq5',
                description: 'เขียวมินต์',
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
