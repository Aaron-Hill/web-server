var express = require('express');
var app = express();

//First port is for heroku, 2nd is for local
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js')


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



