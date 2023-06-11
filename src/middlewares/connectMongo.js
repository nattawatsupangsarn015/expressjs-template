const connnectionMongoDB = require("../utils/mongo");

module.exports = async (req, res, next) => {
  const db = await connnectionMongoDB();
  res.on("finish", async function () {
    console.log("mongodb disconnecting...");
    try {
      if (db.connection.readyState === 1) {
        await db.connection.close();
        isConnected = db.connection.readyState;
      }
    } catch (err) {
      console.log("disconnect error:", err);
    }
    return;
  });
  next();
};
