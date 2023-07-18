module.exports = (sequelize, DataTypes) => {
    const Payment = sequelize.define(
        'Payment',
        {
            paymentStatus: DataTypes.STRING,
            emailUser: DataTypes.STRING,
        },
        {
            underscored: true,
        }
    )

    Payment.associate = (models) => {
        Payment.hasOne(models.Order, {
            foreignKey: {
                name: 'paymentId',
                allowNull: true,
            },
            onDelete: 'RESTRICT',
        })
    }
    return Payment
}
