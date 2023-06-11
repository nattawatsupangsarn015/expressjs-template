const express = require("express");
const router = express();

router.use((req, res, next) => {
  res.status(200).json({});
});

module.exports = router;
