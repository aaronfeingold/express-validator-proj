const db = require('../config/db.config.js');
const mongoose = db.mongoose

db.post = require('./post.model.js')(mongoose)

module.exports = db