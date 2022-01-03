const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("https://http://localhost:3000/");
});

module.exports = router;
