//   A route to serve the login page.

/////////////
// Imports //
var renderer = require('../renderer.js');

//////////
// Code //

// Getting the login page.
function get(req, res) {
    renderer.renderAndSend('login.jade', req, res, {});
}

/////////////
// Exports //
module.exports.get = get;
