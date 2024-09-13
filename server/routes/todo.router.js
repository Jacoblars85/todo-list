const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/list', (req, res) => {
    
    const query = `
    SELECT * FROM "todoList";
    `;

    pool.query(query)
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get todo list', err);
            res.sendStatus(500)
        })
});


router.post('/new', (req, res) => {
// console.log('req.body', req.body);

const sqlText = `
        INSERT INTO "todo_list" 
        ("name")
        VALUES
        ($1);
    `;
const sqlValues = [req.body.newTodo]

pool.query(sqlText, sqlValues)
    .then(result => {
        res.sendStatus(201);
    }).catch(err => {
        console.log('err in sending new todo POST route', err);
        res.sendStatus(500)
    })
});


router.put("/finish", (req, res) => {

const sqlText = `
    UPDATE "todo_list"
        SET "is_complete" = TRUE
        WHERE "id" = $1;
        `;

        const sqlValues = [req.body.todoId];

pool
    .query(sqlText, sqlValues)
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log("Error in todo.router /finish PUT,", err);
        res.sendStatus(500);
    });
});


router.delete("/delete", (req, res) => {

    const sqlText = `
    DELETE FROM "todo_list"
        WHERE "id" = $1;
        `

    const sqlValues = [req.body.todoId];

pool
    .query(sqlText, sqlValues)
    .then((result) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log("Error in todo.router DELETE, deleting todo", err);
        res.sendStatus(500);
    });
});


module.exports = router;
