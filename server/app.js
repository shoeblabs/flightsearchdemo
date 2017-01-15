var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//static directory
app.use(express.static(path.join(__dirname, '../client')));

console.log("############ FLIGHTSEARCH SERVER STARTED #############");
console.log("################## Default port:5000 #################");

app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname,'../client/index.html'));
});

module.exports = app;