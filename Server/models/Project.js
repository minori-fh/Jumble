const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Project = sequelize.define("Project", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE
    });

    Project.associate = function (models) {

        Project.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Project.hasMany(models.Task, {

        });

        Project.hasOne(models.Budget, {

        });

    };

    return Project;
}