module.exports = (sequelize, DataTypes) => {
    const Avatar = sequelize.define(
        'Avatar',
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            image: DataTypes.STRING,
            price: DataTypes.INTEGER,
            apiId: DataTypes.STRING,
            isShow: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            underscored: true,
        }
    )

    Avatar.associate = (models) => {
        Avatar.hasMany(models.UserAvatar, {
            foreignKey: {
                name: 'avatarId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        Avatar.hasMany(models.User, {
            foreignKey: {
                name: 'avatarId',
                allowNull: true,
            },
            onDelete: 'RESTRICT',
        })
    }
    return Avatar
}
