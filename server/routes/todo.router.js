const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post ('/', (req, res)=>{
    let newTask = req.body;
    console.log('Adding Task', newTask);
   
    let queryText = `
    INSERT INTO "tasks" ("task", "complete")
    VALUES ($1, $2);
    `;

    pool.query(queryText, [newTask.task, newTask.complete])
        .then((result) => {
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error adding new task`, queryText, error);
        res.sendStatus(500);
    });
});

    




router.get ('/', (req, res)=>{ 
    console.log('get hit');
    res.send('bark');
}) //


module.exports = router;