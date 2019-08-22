//require express
const express = require('express');
//initialize express router
const router = express.Router();
//require db
const db = require('../db');
const { Book } = db.models;

//use express JSON parser
router.use(express.json());
router.use (express.urlencoded({extended: false}))

//add routing for new book form
router.get('/books/new', (req,res) => {
    res.render('new-book');
});

router.post('/books/new', (req, res) => {
    (async () => {
        // get all variables needed to build our books
        const title = req.body.title;
        const author = req.body.author;
        const genre = req.body.genre;
        const year = req.body.year;
        
        try {
            await  Book.create({
                title,
                author,
                genre,
                year
            })
            .then( () => {
                res.redirect('/books');
            })
        } catch (error) {
            console.error('Error adding to the database', error);
        }

    })();
    
})

module.exports = router;