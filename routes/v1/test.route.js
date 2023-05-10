const express = require("express");
const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("tools found ");
// });

// router.post("/", (req, res) => {
//   res.send("post method");
// });

//shorthand:
router
  .route("/")
  .get((req, res) => {
    res.send("tools found ");
  })
  .post((req, res) => {
    res.send("post method");
  });

module.exports = router;
