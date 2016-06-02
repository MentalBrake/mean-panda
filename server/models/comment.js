"use strict";

var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
        email: {type: String, required: true, trim: true},
        message: {type: String}
    },
    {
        timestamps: true
    });

var commentModel = mongoose.models['Comment'] || mongoose.model('Comment', commentSchema);

module.exports = commentModel;