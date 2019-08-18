//require express
const express = require('express');
//initialize express router
const router = express.Router();
//require db
const db = require('../db');
//get the book model
const { Book } = db.models;

//add routing for new book form
router.get('/books/new', (req,res) => {
    res.render('newBook')
});

router.post('/books/new', (req, res) => {
    res.send('Post route active');
    
    // get all variables needed to build our books
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.author;
    const year = req.body.year;

    db.books.create({
        title,
        author,
        genre,
        year
    })
    

})

module.exports = router;