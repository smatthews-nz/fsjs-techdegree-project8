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
    try{
        res.render('new-book');
    } catch (error){
        error.status = 500;
        error.message = "Oops! Internal server error. Sorry!";
        next(error);
    }
});

router.post('/books/new', (req, res) => {
    (async () => {
        // get all variables needed to build our books
        const id = req.params.id;
        const title = req.body.title;
        const author = req.body.author;
        const genre = req.body.genre;
        const year = req.body.year;
        
        try {
            const book = await Book.create({
                id,
                title,
                author,
                genre,
                year
            })
            console.log(book)
            res.redirect(`/book/${book.dataValues.id}`);
            
        } catch (error) {
            //catch sequelize error
            if(error.name === 'SequelizeValidationError'){
                const errors = error.errors
                res.render('new-book', {errors})
            } else {
                //if not sequelize error then res error template
                console.error(error)
                error.status = 500;
                error.message = "Book could not bed added to the library database"
                next(error);
            }
        }

    })();
    
})

module.exports = router;