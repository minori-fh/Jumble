const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Assignee = sequelize.define("Assignee", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    Assignee.associate = function (models) {

        Assignee.belongsTo(models.Task, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Assignee;
}