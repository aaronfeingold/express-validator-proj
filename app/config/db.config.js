require('dotenv').config()
var pgp = require('pg-promise')
var pgdb = pgp(process.env.DATABASE_URL)

module.exports = {
  db: pgdb 
};