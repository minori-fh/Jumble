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
            name: req.body.name
        }).then(function (newAssignee) {
            console.log(newAssignee)
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