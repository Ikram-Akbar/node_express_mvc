const express = require("express");
const router = express.Router();
const toolsController = require('../../controllers/tools.controller');

// router.get("/", (req, res) => {
//   res.send("tools found ");
// });

// router.post("/", (req, res) => {
//   res.send("post method");
// });

//shorthand:
router
  .route("/")
  .get(toolsController.allTools)
  .post(toolsController.sendTools);

module.exports = router;
