// Dependencies
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Routes
require("./routes/html-routes")(app);
require("./routes/post-api-routes")(app);
require("./routes/user-api-routes")(app);

var syncOptions = { force: false };

// MySQL connection
var SQLConnection = mysql.createConnection( {
  host: "localhost",
  user: "root",
  password: "carnutz",
});

SQLConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected");
});

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
