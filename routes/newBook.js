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
            //catch sequelize error
            if(error.name === 'SequelizeValidationError'){
                const errors = error.errors.map( err => err.message);
                console.error('Missing information: ', errors)

                //keep book data entered by user so we can the pass errors
                const bookData ={
                    id: req.params.id,
                    title: req.body.title,
                    author: req.body.author,
                    genre: req.body.genre,
                    year: req.body.year
                };

                //render the template, passing the book data and errors.
                res.render('new-book', {bookData, errors})
            } else {
                //if not sequelize error then res error template
                res.render('error')
            }
        }

    })();
    
})

module.exports = router;