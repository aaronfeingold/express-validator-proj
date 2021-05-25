const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var pgp = require('pg-promise')
const db = {}
db.mongoose = mongoose
db.url = dbConfig.url;
db.posts = require('./post.model.js')(mongoose)

module.exports = db