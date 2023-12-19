module.exports = (sequelize, DataTypes) => {
    const Notes = sequelize.define("Notes", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        }
    })
    return Notes
}