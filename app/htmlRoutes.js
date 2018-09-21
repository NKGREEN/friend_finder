var path = require("path");

module.exports = function (app){


// GET request for root page sends home html file to display
app.get("/", function (req, res) {
	res.sendFile(path.join(__dirname, "/../public/home.html"));
});

// GET request for /survey page sends survey html file
app.get("/survey", function (req, res) {
	res.sendFile(path.join(__dirname, "/../public/survey.html"));
});
};