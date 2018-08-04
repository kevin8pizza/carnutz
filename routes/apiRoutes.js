var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/car_db", function(req, res) {
    db.car_db.findAll({}).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  // Create a new example
  app.post("/api/car_db", function(req, res) {
    db.car_db.create(req.body).then(function(dbCar) {
      res.json(dbCar);
    });
  });

  // Delete an example by id
  app.delete("/api/car_db/:id", function(req, res) {
    db.car_db.destroy({ where: { id: req.params.id } }).then(function(dbCar) {
      res.json(dbCar);
    });
  });
};
