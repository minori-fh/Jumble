var db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Assignee.findAll({
            where: {
                TaskId: req.params.id
            }
        }).then(function (dbAssignee) {
            res.json(dbAssignee);
        });
    },
    findOne: function (req, res) {
        db.Assignee.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbAssignee) {
            res.json(dbAssignee);
        });
    },
    create: function (req, res) {
        db.Assignee.create({
            name: req.params.name
        }).then(function (newBudget) {
            console.log(newBudget)
        })
    },
    update: function (req, res) {
        db.Assignee.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function (dbAssignee) {
            res.json(dbAssignee);
        });
    }
};