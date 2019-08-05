var db = require("../models");

module.exports = {
    findOne: function (req, res) {
        db.Task.findOne({
            where: {
                ProjectId: req.params.id
            }
        }).then(function (dbBudget) {
            res.json(dbBudget);
        });
    },
    create: function (req, res) {
        db.Task.create({
            task: req.body.task,
            deadline: req.body.deadline
        }).then(function (newTask) {
            console.log(newTask)
        })
    },
    update: function (req, res) {
        db.Task.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function (dbBudget) {
            res.json(dbBudget);
        });
    },
    remove: function (req, res) {
        db.Task.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBudget) {
            res.json(dbBudget);
        });
    },
};