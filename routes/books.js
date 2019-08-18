//require express
const express = require('express');
//initialize express router
const router = express.Router();
//require db
const db = require('../db');
const { Book } = db.models;
let books;

(async () => {
    try {
      books = await Book.findAll();
       console.log(books.map(book => book.toJSON()));
    } catch (error){
        console.error('Error connecting to the database: ', error);
    }
})();

router.get('/books', (req, res) => {
    res.render('index', {books});

})

module.exports = router;