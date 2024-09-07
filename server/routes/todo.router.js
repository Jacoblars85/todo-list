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

router.get('/', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;
