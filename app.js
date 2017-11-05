var express = require('express');
const bodyParser = require('body-parser');
var path = require("path");
const config = require('config');

var app = express();
var mongoose = require('mongoose');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(config.DBHost);

var routes = require('./routes/routes');

//api routes
app.use('/api', routes);

//documentation routes
app.use('/docs', express.static(path.join(__dirname + '/docs')));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});