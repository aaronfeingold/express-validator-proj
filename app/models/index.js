const dbConfig = require('../config/db.config.js');


var pgp = require('pg-promise')
var db = pgp('postgres://username:password@host:port/database')

const db = {}
db.mongoose = mongoose
db.url = dbConfig.url;
db.posts = require('./post.model.js')(mongoose)

module.exports = db