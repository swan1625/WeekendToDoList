const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
// const router = require('./routes/todo.')
app.use (express.static ('server/public'))

const PORT = 5000;






// app.use('/toDoList', router)









// -------------------------------------------------
app.listen(PORT, () => {
    console.log('listening on port', PORT);
  });