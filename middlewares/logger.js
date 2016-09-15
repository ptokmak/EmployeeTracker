//   This module provides a middleware to automatically log incoming page
//   requests.

//////////
// Code //

// A middleware to log information about the request.
function middleware(req, res, next) {    
    if (req.originalUrl.substr(0, '/static/'.length) === '/static/')
        console.log(req.method + ' - Non-existant static file: ' + req.originalUrl);
    else
        console.log(req.method + " - " + req.originalUrl);

    next();
}

/////////////
// Exports //
module.exports.middleware = middleware;
