var express = require('express'),
	http = require('http'),
	path = require('path'),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	errorHandler = require('errorhandler');

var app = module.exports = express();

app.set('port', 9000);
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(path.join(__dirname, 'app')));

app.use(errorHandler());

app.get('/', function(req,res) {
	res.sendFile(path.join(__dirname, '/app/index.html'));
});

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
