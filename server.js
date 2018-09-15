var express = require("express");
var bodyParser = require("body-parser");

// Starting express 
var app = express();

// Assigning port to local host 8080 OR to the default port when deployed to Heroku
var PORT = process.env.PORT || 8080;

// Setting up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Imports routing js files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Console log a confirmation that server is connected
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
