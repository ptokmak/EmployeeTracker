//   A set of utilities for working with JSON. Formatted for the client-side.

//////////
// Code //

// Joining a list of names and values into a JSON object containing all of the
// pairs by name.
function joinJSON(jsons) {
    var ret = {};
    for (var i = 0; i < jsons.length; i++)
        ret[jsons[i].name] = jsons[i].value;
    return ret;
}
