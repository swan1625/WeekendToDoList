const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use (express.static ('server/public'))

const PORT = 5000;


const router = require('./routes/todo.router');
app.use('/todolist', router);



// -------------------------------------------------
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });