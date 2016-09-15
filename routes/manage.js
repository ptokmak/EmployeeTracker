//   This page serves the page for managing your goals.

/////////////
// Imports //
var renderer = require('../renderer.js'),
    schema   = require('../schema.js');

//////////
// Code //

// Serving the manage page.
function get(req, res) {
    if (req.cookies.logged !== null) {
        schema.get.Goal.find({
            userId: req.cookies.logged
        }).sort({
            subId: 'descending'
        }).exec(function (err, goals) {
           if (err)
               throw err;
           renderer.renderAndSend('manage.jade', req, res, { goals: goals });
        });
    } else {
        renderer.renderAndSend('manage.jade', req, res, {});
    }
}

/////////////
// Exports //
module.exports.get = get;
