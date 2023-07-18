module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {}, { underscored: true })

    Order.associate = (models) => {
        Order.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        Order.belongsTo(models.Payment, {
            foreignKey: {
                name: 'paymentId',
                allowNull: true,
            },
            onDelete: 'RESTRICT',
        })

        Order.belongsTo(models.Avatar, {
            foreignKey: {
                name: 'avatarId',
                allowNull: true
            },
            onDelete: 'RESTRICT',
        })

        Order.belongsTo(models.Hat, {
            foreignKey: {
                name: 'hatId',
                allowNull: true
            },
            onDelete: 'RESTRICT',
        })

        Order.belongsTo(models.Drink, {
            foreignKey: {
                name: 'drinkId',
                allowNull: true
            },
            onDelete: 'RESTRICT',
        })
    }
    return Order
}
