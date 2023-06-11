module.exports.handleError = async (err, req, res, next) => {
  console.log({ err });
  res
    .status(err.statusCode ? err.statusCode : 500)
    .send(err.message)
    .end();
};

module.exports.convertRegex = (name) =>
  name.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

module.exports.isEmpty = (obj) => Object.keys(obj).length === 0;
module.exports.uniqueArray = (array = []) => [...new Set(array)];
