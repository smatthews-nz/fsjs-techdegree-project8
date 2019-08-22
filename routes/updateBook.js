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
            console.error('Error updating book', error)
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