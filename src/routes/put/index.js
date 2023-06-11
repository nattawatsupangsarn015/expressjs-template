const express = require("express");
const router = express();

router.put("/healthcheck", async (req, res, next) => {
  try {
    const healthcheck = {
      path: "PUT",
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
