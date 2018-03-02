const path = require('path');
const friends = require('../data/friends.js');

// These paths deal with the friends array of objects, or the api
const apiPaths = function(app) {
    // the get response that will show all of the users who have taken the survey
	app.get('/friends', function(request, response) {
		response.json(friends);
	});

    // the post that will do the math to find the friend match, and send it out to the friends api
	app.post('/api/friends', function(request, response) {
        // grabbing the entire friend object and also just the users answers
		const newFriend = request.body;
		const newFriendAnswers = request.body.answers;
		let finalScores = [];

        // going through both the users array of answers as well as all of the other users answers
        // first we subtract the corresponding numbers, then add up the diffrences, then push the final scores to an array
		for (let i = 0; i < friends.length; i++) {
           	let differences = 0;
            for (let j = 0; j < newFriendAnswers.length; j++) {
            	differences += (Math.abs(parseInt(friends[i].answers[j]) - parseInt(newFriendAnswers[j])));
        	}
            finalScores.push(differences);
        };

        // loop through all of the final scores, and find the one that is closest to 0
        let friendGoal = 0;
        for (let i = 0; i < finalScores.length; i++) {
        	if (finalScores[i] <= finalScores[friendGoal]) {
        		friendGoal = i
        	}
        }
        // match up the final number with the original friend it belongs to
        let friendMatch = friends[friendGoal]
        // once were done with the user's object, send it to the api
        friends.push(newFriend);
        // send out the friend match so it can be grabbed by the other post call in survey.js, and put it on the modal
		response.json(friendMatch);
	});
};

module.exports = apiPaths;