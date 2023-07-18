module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User',
        {
            email: {
                type: DataTypes.STRING,
                unique: true,
                validate: {
                    isEmail: true,
                },
            },
            isAdmin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            password: DataTypes.STRING,
            googleToken: DataTypes.TEXT,
            nickname: DataTypes.STRING,
        },
        {
            underscored: true,
        }
    )

    User.associate = (models) => {
        User.hasMany(models.UserAvatar, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        User.hasMany(models.UserHat, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        User.hasMany(models.UserDrink, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        User.hasMany(models.Order, {
            foreignKey: {
                name: 'userId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })
        User.belongsTo(models.Avatar, {
            foreignKey: {
                name: 'avatarId',
                allowNull: true,
            },
            onDelete: 'RESTRICT',
        })
        User.belongsTo(models.Drink, {
            foreignKey: {
                name: 'drinkId',
                allowNull: true,
            },
            onDelete: 'RESTRICT',
        })
        User.belongsTo(models.Hat, {
            foreignKey: {
                name: 'hatId',
                allowNull: true,
            },
            onDelete: 'RESTRICT',
        })
    }
    return User
}
