require('dotenv').config()

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {}
db.mongoose = mongoose
db.url = process.env.DB_HOST

module.exports = db