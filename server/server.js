const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;

const koalaRouter = require('./routes/koala.router')

app.use(bodyParser.urlencoded({ extended: true }));














app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });