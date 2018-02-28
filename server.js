const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const friends = [];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app/public'));

app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname, 'app/public/home.html'));
});

app.get('/survey', function(request, response) {
	response.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

app.get('/friends', function(request, response) {
	response.json(friends);
});

app.post('/api/new', function(request, response) {
	const newfriend = request.body;
	console.log(newfriend);
	friends.push(newfriend);
	response.json(newfriend);
});

app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
 