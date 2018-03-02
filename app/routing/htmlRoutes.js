let path = require('path');

// sending the two paths for the home page and the survey to the server
const htmlPaths = function(app) {
	app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, '/../public/home.html'));
	});

	app.get('/survey', function(request, response) {
		response.sendFile(path.join(__dirname, '/../public/survey.html'));
	});
};

module.exports = htmlPaths;