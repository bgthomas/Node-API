const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const config = require('config');

const app = express();
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(config.DBHost);

const routes = require('./routes/routes');

//api routes
app.use('/api', routes);

//documentation routes
app.use('/docs', express.static(path.join(__dirname + '/docs')));

var port = process.env.PORT || 3000;

const server = app.listen(port, function() {
    console.log('Example app listening on port 3000!');
});

module.exports = server;