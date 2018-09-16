// Default Fifth Element friends
var friends = [{
        "name": "Leeloo",
        "photo": "https://media.giphy.com/media/3o7buesX9LNTok38XK/giphy.gif",
        "scores": [],
        "bio": "Me fifth element. Me save you."
    }, {
        "name": "Korben Dallas",
        "photo": "https://media.giphy.com/media/qUYVOUS7fxiG4/giphy.gif",
        "scores": [],
        "bio": "I'm lovely but not the most lively"
    }, {
        "name": "Diva Plavalaguna",
        "photo": "https://media.giphy.com/media/SGL6zJNRn36CY/giphy.gif",
        "scores": [],
        "bio": "Hope you like dancin' ooh la la."
    }, {
        "name": "Ruby Rhod",
        "photo": "https://media.giphy.com/media/l0EoBVexxvaP88SSQ/giphy.gif",
        "scores": [],
        "bio": "I'm a great friend to have I've got all the pies. "
    }, {
        "name": "Father Vito Cornelius",
        "photo": "",
        "scores": [],
        "bio": "I hope you're OK with feelings."
    }, {
        "name": "President Lindberg",
        "photo": "https://media.giphy.com/media/lcCieNL026IO4/giphy.gif",
        "scores": [],
        "bio": "I love solving a good murder, and a strong cup of coffee."
    }, {
        "name": "Jean-Baptiste Emanuel Zorg",
        "photo": "https://media.giphy.com/media/gMdcE99lufTzy/giphy.gif",
        "scores": [,]
        "bio": "I'm an utter douchelord."
    }, {
        "name": "Norma Jennings",
        "photo": "https://media.giphy.com/media/26n60J5FeXvCIumOY/giphy.gif",
        "scores": [3, 1, 5, 2, 2, 3, 5, 1, 5, 5],
        "bio": "I can make you breakfast!"
    }, {
        "name": "Log Lady",
        "photo": "https://media.giphy.com/media/B9bjlOhhqUEdW/giphy.gif",
        "scores": [1, 1, 1, 5, 1, 5, 2, 3, 3, 1],
        "bio": "Hope you like threesomes! "
    }, {
        "name": "General Munroe",
        "photo": "https://media.giphy.com/media/l0Iya1K4b3wH2HTpK/giphy.gif",
        "scores": [],
        "bio": "I have a feeling you are into some kinky stuff."
    },

    https://media.giphy.com/media/unpzgMqjF83XW/giphy.gif

];

// exports list of friends
exports.friends = friends;

// find match function exported
exports.findMatch = function(frand) {
    // empty array 
    var differences = [];


    // all friends are looped through
    for (var i = 0; i < friends.length; i++) {

        // Total difference calculation starts at 0
        var totalDifference = 0;

        // loops through array of scores
        for (var j = 0; j < 10; j++) {
            // total difference will be calculated as the absolute value of friend's scores and users' scores
            totalDifference += Math.abs(friends[i].scores[j] - frand.scores[j]);

        }

        // push total difference to empty differences array
        differences.push(totalDifference);
    }

    // index variable starts at 0
    var index = 0;
    // lowest score is initally determined as the first number in the differences array
    var lowestScore = differences[0];

    // loops through differences array, starting at second variable
    for (var i = 1; i < differences.length; i++) {
        // if the difference is less the first entry than it is assigned as the lowest score variable and the index is saved in the index variable
        if (differences[i] < lowestScore) {
            lowestScore = differences[i];
            index = i;
        }
    }

    // matched friends variable is determined at the result of this loop
    var matchedFriend = friends[index];

    // function find match returns the friend result
    return matchedFriend;


}