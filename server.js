// Dependencies
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");

// Setting express server and can be used in Heroku
var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
require("./routes/html-routes")(app);
require("./routes/post-api-routes")(app);
require("./routes/user-api-routes")(app);

// var syncOptions = { force: false };

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected.");
// });

// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
