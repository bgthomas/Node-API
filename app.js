var express = require('express');
const bodyParser = require('body-parser');

var app = express();
var mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo:27017/data');

var routes = require('./routes/routes');
app.use('/api', routes);

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});