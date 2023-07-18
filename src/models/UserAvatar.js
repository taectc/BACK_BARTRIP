module.exports = (sequelize, DataTypes) => {
    const UserAvatar = sequelize.define('UserAvatar', {}, { underscored: true })

    UserAvatar.associate = (models) => {
        UserAvatar.belongsTo(models.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        UserAvatar.belongsTo(models.Avatar, {
            foreignKey: {
                name: 'avatarId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
    }
    return UserAvatar
}
