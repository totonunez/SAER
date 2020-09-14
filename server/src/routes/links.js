const express = require('express');
const router = express.Router();
const db = require('../database');
const pool = require('../database');
const res = null;

const getBooks = async () => {
    try {
        const res = await pool.query('select * from roles');
        pool.end()
    } catch(e) {
        console.log(e);
    }
};

getBooks();

module.exports = router;