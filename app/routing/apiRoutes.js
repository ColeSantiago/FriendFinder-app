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

            console.log(finalScores);
            friends.push(newFriend);
			response.json(newFriend);
	});
};

module.exports = apiPaths;