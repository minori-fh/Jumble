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
        console.log("this is the req server side",req)
        db.Task.create({
            task: req.body.task,
            deadline: req.body.deadline,
            ProjectId: req.body.ProjectId
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
    }
};