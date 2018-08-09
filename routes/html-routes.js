// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index2 route loads index2.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index2.html"));
  });

  // index route loads index.html
  app.get("/infopage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
