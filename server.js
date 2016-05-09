var express = require('express');
var app = express();

var PORT = 3000;

var middleware = {
	requireAuthentication: function(req, res, next) {
		console.log('Private route hit');
		next();
	},
	logger: function(req, res, next) {
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' at ' + new Date().toString());
		next();
	}
}

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
	res.send("About us!!!");
});

app.use(express.static(__dirname + '/public'));

//TO PRINT THE FILE NAME 
// console.log(__dirname);

app.listen(PORT, function() {
	console.log("Server is listening at port " + PORT);
});



