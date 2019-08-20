//require express
const express = require('express');
//require router
const router = express.Router();
//require db
const db = require('../db');
//get the book model
const { Book } = db.models;
//declare the book variable
let book;


//add routing for book:id
router.get('/book/:index', (req, res) => {
    //async method to do a sequelize query for the book id.
    (async () => {
        try {
            book = await Book.findByPk(req.params.index)
            
        } catch(error){
            console.error('Error fetching book', error);
        }
    })();

    
    res.render('update-book', {book});

});

module.exports = router;