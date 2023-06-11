require("dotenv").config();
const express = require("express");
const router = express();
const cors = require("cors");

const PORT = process.env.PORT_LOCAL || 8080;
const { handleError } = require("./utils");
const connectMongo = require("./middlewares/connectMongo");

router.use(connectMongo);
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.options("*", cors({ credentials: true, origin: true }));
router.use(cors({ origin: true, credentials: true }));

router.use("/", require("./routes/get"));
router.use("/", require("./routes/put"));
router.use("/", require("./routes/post"));
router.use("/", require("./routes/delete"));
router.use("/", require("./routes/options"));

/**Error handler */
router.use(handleError);

router.listen(PORT, () => {
  console.log("Start server with port : " + PORT);
});

module.exports = router;
