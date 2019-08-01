const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define("Task", {
        task: {
            type: DataTypes.STRING,
            allowNull: false
        },
        deadline: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });

    Task.associate = function (models) {

        Task.belongsTo(models.Project, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Task;
}