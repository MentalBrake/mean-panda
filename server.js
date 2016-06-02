"use strict";


process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./server/config/mongoose'),
    express = require('./server/config/express'),
    config = require('./server/config/config');


var db = mongoose();
var app = express();
app.listen(config.port);

module.exports = app;

console.log('running Mean Panda Server on port: ' + config.port);