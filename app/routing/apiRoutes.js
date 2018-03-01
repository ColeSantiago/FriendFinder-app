const path = require('path');
const friends = require('../data/friends.js');

const apiPaths = function(app) {
	app.get('/friends', function(request, response) {
		response.json(friends);
	});

	app.post('/api/friends', function(request, response) {
		const newFriend = request.body;
		const newFriendAnswers = request.body.answers;
		let finalScores = [];

		for (let i = 0; i < friends.length; i++) {
           	let differences = 0;
            for (let j = 0; j < newFriendAnswers.length; j++) {
            	differences += (Math.abs(parseInt(friends[i].answers[j]) - parseInt(newFriendAnswers[j])));
        	}
            finalScores.push(differences);
        };

        let friendGoal = 0;
        for (let i = 0; i < finalScores.length; i++) {
        	if (finalScores[i] <= finalScores[friendGoal]) {
        		friendGoal = i
        	}
        }
        let friendMatch = friends[friendGoal]
        friends.push(newFriend);
		response.json(friendMatch);
	});
};

module.exports = apiPaths;