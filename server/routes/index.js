function initRoutes(app) {
  app.get("/api", function (req, res) {
    res.json({ msg: "Test api response" });
  });
}

module.exports = initRoutes;
