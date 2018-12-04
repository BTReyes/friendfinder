//* A GET route with the url `/api/friends`. 
//This will be used to display a JSON of all possible friends.
//* A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.


// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Routes
// =============================================================


// Displays all characters
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});



// Create New Characters - takes in JSON input
app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

    characters.push(newfriend);

    res.json(newfriend);
});

// scoring logic

function score() {
    for (i = 0; i < 10; i++) {
        dif[i] = abs(userData.scores.val[i] - friend.val[i]);
        totalDifference[i] = totalDifference[i] + dif[i];
    };

    function match() {
        for (i = 0; i < friends.length; i++) {
            var min = total[0];
            var match = friend[0];

            if (totalDifference[i] < min) {
                min = total[i];
                match = friend[i];
            };


            // Starts the server to begin listening
            // =============================================================
            app.listen(PORT, function () {
                console.log("App listening on PORT " + PORT);
            });