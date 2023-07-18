module.exports = (sequelize, DataTypes) => {
    const UserHat = sequelize.define('UserHat', {}, { underscored: true })

    UserHat.associate = (models) => {
        UserHat.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        UserHat.belongsTo(models.Hat, {
            foreignKey: {
                name: 'hatId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
    }
    return UserHat
}
