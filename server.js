const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// using body parser.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// This static allows the css and javascript files to be used
app.use(express.static(__dirname + '/app/public'));

// requiring the other js files with all of the URLs
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// listening for the port
app.listen(PORT, function() {
	console.log('App listening on PORT ' + PORT);
});
 