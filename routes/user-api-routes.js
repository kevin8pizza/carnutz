var db = require("../models");

module.exports = function(app) {
  // Find all Authors and return them to the user with res.json
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    // Find one Author with the id in req.params.id and return them to the user with res.json
    db.Users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  app.post("/api/users", function(req, res) {
    // Create an User with the data available to us in req.body
    console.log(req.body);
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  //may want to remove this code- business logic- maybe not able to remove User??
  app.delete("/api/users/:id", function(req, res) {
    // Delete the User with the id available to us in req.params.id
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
};
