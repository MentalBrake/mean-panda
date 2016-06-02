var Comment = require('../models/comment');

exports.create = function (req, res, next) {
    var comment = new Comment({
        email: req.query.email,
        message: req.query.message
    });

    comment.save(function (err) {
        if (err) {
            return next(err);
        } else {
            res.json(comment);
        }
    });

};

exports.list = function (req, res, next) {
    var query = Comment.find().sort([['createdAt', 'descending']]);
    query.exec(function (err, comments) {
        if (err) {
            return next(err);
        } else {
            res.json(comments);
        }
    });
};