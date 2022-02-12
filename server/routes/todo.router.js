const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post ('/', (req, res)=>{
    let newTask = req.body;
    console.log('Adding Task', newTask);
   
    let queryText = `
    INSERT INTO "tasks" ("task", "status")
    VALUES ($1, $2);
    `;

    pool.query(queryText, [newTask.task, newTask.status])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error adding new task`, queryText, error);
        res.sendStatus(400);
    });
});


router.get ('/', (req, res)=>{ 
    console.log('get hit');
    let queryText = 'SELECT * FROM "tasks";';
    pool.query(queryText)
      .then((result) => {
          res.send(result.rows);
      })
      .catch((err) => {
          console.log('Error making query', queryText, err);
          res.sendStatus(400);
      });
}) //


module.exports = router;