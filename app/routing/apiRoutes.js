const path = require('path');
const friends = require('../data/friends.js');

const apiPaths = function(app) {
	app.get('/friends', function(request, response) {
		response.json(friends);
	});

	app.post('/api/new', function(request, response) {
		const newfriend = request.body;
		console.log(newfriend);
		friends.push(newfriend);
		response.json(newfriend);
	});
};

module.exports = apiPaths;