const router = require("express").Router();
const task = require("../../controllers/task-controller");

// =====================================
//     /api/task   =====================
// =====================================
router.route("/")
  .post(task.create);

router.route("/:id")
    .get(task.findOne)
    .put(task.update);
	
module.exports = router;