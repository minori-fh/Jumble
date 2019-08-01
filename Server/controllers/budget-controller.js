var db = require("../models");

module.exports = {
    findOne: function (req, res) {
        db.Budget.findOne({
            where: {
                ProjectId: req.params.id
            }
        }).then(function (dbBudget) {
            res.json(dbBudget);
        });
    },
    create: function (req, res) {
        db.Budget.create({
            total: req.body.total,
            Marketing: req.body.Marketing,
            HR: req.body.HR,
            Design: req.body.Design,
            Engineering: req.body.Engineering,
            Sales: req.body.Sales,
            Finance: req.body.Finance,
            Security: req.body.Security,
            ProjectId: req.body.id
        }).then(function (newBudget) {
            console.log(newBudget)
        })
    },
    update: function (req, res) {
        db.Budget.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function (dbBudget) {
            res.json(dbBudget);
        });
    }
};