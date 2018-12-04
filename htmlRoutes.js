//* A GET Route to `/survey` which should display the survey page.
//* A default, catch-all route that leads to `home.html` which displays the home page.


var express = require("express");

var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Mrbitey1!",
  database: "friends_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });


// Survey get route
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });