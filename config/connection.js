const { connect, connection } = require('mongoose');

const URIString = process.env.MONGODB_URI || 'mongodb://localhost:27017/';

connect(URIString);

module.exports = connection;