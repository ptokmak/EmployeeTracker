//   This route handles logging out the player.

//////////
// Code //

// Serving the logout page.
function get(req, res) {
    res.clearCookie('logged');
    res.redirect('/');
}

/////////////
// Exports //
module.exports.get = get;
