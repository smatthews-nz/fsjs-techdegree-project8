//require express
const express = require('express');
//initialize express router
const router = express.Router();
//require db
const db = require('../db');
//get the book model
const { Book } = db.models;
//declare the book variable
let books;


//render the template with all books
router.get('/books', (req, res) => {

    (async () => {
        try {
            //initialize books variable to a sequelize query, finding all books
          books = await Book.findAll();
          res.render('index', {books});
        } catch (error){
            console.error('Error connecting to the database: ', error);
        }
    })();

})

module.exports = router;