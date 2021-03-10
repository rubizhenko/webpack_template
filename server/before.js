const initRoutes = require("./routes");

const before = function (app, server, compiler) {
  initRoutes(app);
};

module.exports = before;
