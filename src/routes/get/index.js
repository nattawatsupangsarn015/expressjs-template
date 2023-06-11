const express = require("express");
const router = express();

router.get("/healthcheck", async (req, res, next) => {
  try {
    const healthcheck = {
      path: "GET",
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
