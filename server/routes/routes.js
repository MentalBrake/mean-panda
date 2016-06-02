"use strict";

var indexController = require('../controllers/indexController'),
    commentsController = require('../controllers/commentsController');

module.exports = function (app) {
    app.get('/', indexController.render);

    app.route('/api/comments')
        .post(commentsController.create)
        .get(commentsController.list);

    app.route('/*').get(indexController.render);
};