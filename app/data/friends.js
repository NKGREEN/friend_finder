// Default Fifth Element friends
var friends = [{
        "name": "Leeloo",
        "photo": "https://media.giphy.com/media/3o7buesX9LNTok38XK/giphy.gif",
        "scores": [5, 2, 5, 1, 1, 1, 2, 5, 2, 2],
        "quote": "Me fifth element - supreme being. Me protect you."
    }, {
        "name": "Korben Dallas",
        "photo": "https://media.giphy.com/media/qUYVOUS7fxiG4/giphy.gif",
        "scores": [5, 3, 1, 5, 2, 3, 2, 5, 3, 2],
        "quote": "You wanna play it soft. We'll play it soft. You wanna play it hard. Let's play it hard."
    }, {
        "name": "Diva Plavalaguna",
        "photo": "https://media.giphy.com/media/SGL6zJNRn36CY/giphy.gif",
        "scores": [5, 3, 4, 2, 3, 1, 3, 5, 1, 3],
        "quote": "She needs your help...and your love."
    }, {
        "name": "Ruby Rhod",
        "photo": "https://media.giphy.com/media/l0EoBVexxvaP88SSQ/giphy.gif",
        "scores": [3, 1, 5, 1, 2, 2, 3, 4, 5, 5],
        "quote": "I don't want one position, I want all the positions!"
    }, {
        "name": "Father Vito Cornelius",
        "photo": "https://media.giphy.com/media/Z6sM4WYln6ZCU/giphy.gif",
        "scores": [5, 5, 4, 3, 3, 2, 2, 5, 4, 2],
        "quote": "We're not on a vacation, we're on a mission!"
    }, {
        "name": "Aknot",
        "photo": "https://media.giphy.com/media/dBo9WljmRe2n6/giphy.gif",
        "scores": [2, 4, 2, 4, 3, 3, 1, 2, 4, 2],
        "quote": "We risked our lives! I believe a little compensation is in order."
    }, {
        "name": "Jean-Baptiste Emanuel Zorg",
        "photo": "https://media.giphy.com/media/gMdcE99lufTzy/giphy.gif",
        "scores": [1, 4,  2,  5, 2, 4, 2, 1, 5, 5]
        "quote": "If you want something done, do it yourself. Yep!"
    }, {
        "name": "Right Arm",
        "photo": "https://media.giphy.com/media/yoGQem5NJGooM/giphy.gif",
        "scores": [2, 4, 3, 4, 3, 3, 3, 2, 3, 4],
        "quote": "You don't understand, I am Korben Dallas!"
    },

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
