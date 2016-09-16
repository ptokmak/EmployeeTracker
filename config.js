
// Initializing the server port.
var port = process.env.PORT;
if (typeof port === 'undefined')
    port = '3000';

// Initializing the MongoDB URI.
var mongoURI = process.env.MONGO_URI;
if (mongoURI === undefined)
    mongoURI = 'mongodb://127.0.0.1:27017/tracker'
	//mongoURI = 'mongodb://heroku_9x1q92kj:nvj8drqm9f4keed72j1ekcgpbd@ds029476.mlab.com:29476/heroku_9x1q92kj'
// Getting the server's port.
function getPort() { return port; }

// Getting the server's MongoDB URI.
function getMongoURI() { return mongoURI; }

// Exports //
module.exports.getPort     = getPort;
module.exports.getMongoURI = getMongoURI;
