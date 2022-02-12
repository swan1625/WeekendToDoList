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
    let queryText = 'SELECT * FROM "tasks" ORDER BY "id" ;';
    pool.query(queryText)
      .then((result) => {
          res.send(result.rows);
      })
      .catch((err) => {
          console.log('Error making query', queryText, err);
          res.sendStatus(400);
      });
}) //

router.delete('/:id', (req, res) => {
    let reqId = req.params.id;
    console.log('Delete ID', reqId);
    let queryText = 'DELETE FROM "tasks" WHERE "id" = $1;'
    pool.query(queryText, [reqId])
        .then((result) => {
            console.log('Task deleted');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('Error making database query', queryText, error);
            res.sendStatus(500);
        })
  })
  
router.put('/:id', (req, res) => {
    let reqIdUpdate = req.params.id;
    let queryText = `UPDATE "tasks" SET "status" = $1 WHERE "id" = $2;`;
    const values = [req.body.newCheck, reqIdUpdate]

    pool.query(queryText, values)
    .then((result) => {
     res.sendStatus(200);
    })
    .catch((err) => {
     console.log(err);
     res.sendStatus(500);
    })
  })
    




module.exports = router;