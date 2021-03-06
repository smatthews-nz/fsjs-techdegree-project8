//require express
const express = require('express');
//require router
const router = express.Router();
//require db
const db = require('../db');
//get the book model
const { Book } = db.models;


//use express JSON parser
router.use(express.json());
router.use (express.urlencoded({extended: false}))


//add routing for book:id
router.get('/book/:id', (req, res) => {
    //async method to do a sequelize query for the book id.
    (async () => {
        try {
            const book = await Book.findByPk(req.params.id)
            res.render('update-book', {book});
        } catch(error){
            console.error('Error fetching book', error);
        }
    })();

});

router.post('/book/:id', async(req, res) => {

        try {
            const book = await Book.findByPk(req.params.id)
            await book.update(req.body)
            .then(() => {
                res.redirect('/books')
            })
        } catch (error){
            if(error.name === 'SequelizeValidationError'){
                const errors = error.errors
                const book = {
                    id: req.body.id,
                    title: req.body.title,
                    author: req.body.author,
                    genre: req.body.genre,
                    year: req.body.year
                }
                res.render('update-book', { book , errors})
            } else {
                //if not sequelize error then res error template
                console.error(error)
                error.status = 500;
                error.message = "Book could not bed added to the library database"
                next(error);
            }
        }

})

router.post('/book/:id/delete', async(req,res) =>{
    try {
        const bookToBeDeleted = await Book.findByPk(req.params.id);
        await bookToBeDeleted.destroy();
        res.redirect('/books');
   } catch (error){
       console.error('Error deleting book', error);
   }
})

module.exports = router;