//   This module provides the database connection and schema for the rest of the
//   program.

// Imports //
var mongoose = require('mongoose');

// Code //

// The schema to be used with the database.
var schema = {
    User: mongoose.model('User', {
        username: String,
        password: String
    }),

    Goal: mongoose.model('Goal', {
        value        : String,
        userId       : String,
        isPublic     : Boolean,
        subId        : Number,
        made         : Date,
        completed    : Boolean,
        dateCompleted: Date
    }),

    Quote: mongoose.model('Quote', {
        quote : String,
        author: String
    })
};

// Exports //
module.exports.get = schema;
