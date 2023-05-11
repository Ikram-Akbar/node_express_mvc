const express = require("express");
const router = express.Router();
const toolsController = require("../../controllers/tools.controller");
const viewCount = require("../../middleware/viewCount");
const rateLimit = require('../../middleware/limiter');

// router.get("/", (req, res) => {
//   res.send("tools found ");
// });

// router.post("/", (req, res) => {
//   res.send("post method");
// });

//shorthand:
router.route("/").get(toolsController.allTools).post(toolsController.sendTools);

router.route("/:id").get(rateLimit,viewCount,toolsController.toolsWithId);

module.exports = router;
