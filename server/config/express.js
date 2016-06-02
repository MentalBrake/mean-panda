var express = require('express'),
    routes = require('../routes/routes'),
    morgan = require('morgan');

module.exports = function () {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }

    app.use(express.static(__dirname + '/../../client'));
    app.set('views', __dirname + '/../../client/');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    routes(app);

    return app;
};