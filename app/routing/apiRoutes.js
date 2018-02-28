const path = require('path');
const friends = require('../data/friends.js');

const apiPaths = function(app) {
	app.get('/friends', function(request, response) {
		response.json(friends);
	});

	app.post('/api/friends', function(request, response) {
		const newFriend = request.body;
		friends.push(newFriend);
		response.json(newFriend);

		let finalScores = [];

		for (let i = 0; i < friends.length; i++) {
           	let differences = 0;
            for (let i = 0; i < newFriend.answers.length; i++) {
                let potentialFriends = friends[i].answers;
                let user = newFriend.answers[i];
                let differences = +potentialFriends - +user;
                
            }
            finalScores.push(differences);
        };
        console.log(finalScores);
	});
};

module.exports = apiPaths;