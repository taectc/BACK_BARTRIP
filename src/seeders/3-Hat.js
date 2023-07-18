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
        return queryInterface.bulkInsert('hats', [
            {
                name: 'มงกุฎทิ่มหี',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688222023/upqctfozqp9uqv2msmyc.svg',
                price: '30',
                description: 'มงกุฎทิ่มหี',
                api_id: 'price_1NOcHZKltfnBEaa8Jg6jnGuo',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'หัวม่วง',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688222052/azw98gbcmnckahoegaby.svg',
                price: '30',
                description: 'หมวกแม่มึง',
                api_id: 'price_1NOcGrKltfnBEaa83oZNGUzB',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                name: 'มงกุฎทิ่มแตด',
                image: 'https://res.cloudinary.com/dzsj9xnd2/image/upload/v1688222091/yukmbf1mycx9c7b4resc.svg',
                price: '30',
                description: 'มงกุฎทิ่มแตด',
                api_id: 'price_1NP6C6KltfnBEaa8wymozUJQ',
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
