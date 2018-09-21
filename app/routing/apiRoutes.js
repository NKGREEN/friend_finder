var friends = require("../data/friends");
var path = require("path");

// Exports our api routes
module.exports = function(app) {

	// GET request for our friends api
    app.get("/api/friends", function(req, res) {
    	// response from friends request in json format
        res.json(friends.friends);
    });

    // POST request to friends api
    app.post("/api/friends", function(req, res) {
    	// new variable created to create new friend from information filled out by user
        var friend = req.body;
        // find match function runs with friend set to the parameter to search for the best match
        res.json(friends.findMatch(friend));
        // user's information is pushed to friends api
        friends.friends.push(friend);
    });

};