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
        return queryInterface.bulkInsert('avatars', [
            {
                name: 'เขียวปากจู๋',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688221787/vauqp9t8nxheviuddvig.svg',
                price: '30',
                description: 'เขียว',
                api_id: 'price_1NP6GZKltfnBEaa8wZtaE7gd',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'เกย์เสื้อม่วง',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688221835/eb3turavtyjqxxjkfw6j.svg',
                price: '30',
                description: 'มะเขือยาว',
                api_id: 'price_1NP6EsKltfnBEaa8M7VLstLl',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'มีจิ๋มสีฟ้า',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688221862/csnzxe1gkl15steqlyve.svg',
                price: '30',
                description: 'สีฟ้า',
                api_id: 'price_1NOcISKltfnBEaa8hD9vFx59',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'มีจิ๋มสีชมพู',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688221891/ok0iic8lu1qfboknpyvz.svg',
                price: '30',
                description: 'สีชมพู',
                api_id: 'price_1NP6DhKltfnBEaa8w75cUTLh',
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
