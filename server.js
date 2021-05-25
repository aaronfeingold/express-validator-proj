const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./app/routes/post.routes')(app)

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// configure the postgres db
const dbConfig = require('../config/db.config.js')
const db = dbConfig.db;

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true  
  })
  .then(()=>{
    console.log("Connected to the database!")
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit()
  })


