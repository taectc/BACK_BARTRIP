module.exports = (sequelize, DataTypes) => {
    const UserDrink = sequelize.define('UserDrink', {}, { underscored: true })

    UserDrink.associate = (models) => {
        UserDrink.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
        UserDrink.belongsTo(models.Drink, {
            foreignKey: {
                name: 'drinkId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
    }
    return UserDrink
}
