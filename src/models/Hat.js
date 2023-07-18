module.exports = (sequelize, DataTypes) => {
    const Hat = sequelize.define(
        'Hat',
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

    Hat.associate = (models) => {
        Hat.hasMany(models.UserHat, {
            foreignKey: {
                name: 'hatId',
                allowNull: false,
            },
            onDelete: 'RESTRICT',
        })

        
        Hat.hasMany(models.User, {
            foreignKey: {
                name: 'hatId',
                allowNull: true,
            },
            onDelete: 'RESTRICT',
        })
    }
    return Hat
}
