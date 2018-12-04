// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// friends (DATA)
// =============================================================


// Root get route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });


// Survey get route
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });