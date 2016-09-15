//   Handling all pages that were requested but were not found.

/////////////
// Imports //
var renderer = require('../renderer.js');

//////////
// Code //

// Handling a 404 on any given page.
function all(req, res) {
    renderer.renderAndSend('notfound.jade', req, res, {});
}

/////////////
// Exports //
module.exports.all = all;
