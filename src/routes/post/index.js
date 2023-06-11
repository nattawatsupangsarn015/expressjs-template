const express = require("express");
const router = express();

router.post("/healthcheck", async (req, res, next) => {
  try {
    const healthcheck = {
      path: "POST",
      uptime: process.uptime(),
      message: "OK",
      timestamp: Date.now(),
    };
    res.status(200).send(healthcheck).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
