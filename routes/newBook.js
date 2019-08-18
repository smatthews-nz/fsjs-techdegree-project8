//require express
const express = require('express');
//initialize express router
const router = express.Router();
//require db
const db = require('../db');

//use express JSON parser
router.use(express.json());
router.use (express.urlencoded({extended: false}))

//add routing for new book form
router.get('/books/new', (req,res) => {
    res.render('newBook');
});

router.post('/books/new', (req, res, next) => {
    res.send('Post route active');
    
    // get all variables needed to build our books
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;
    const year = req.body.year;
    console.log(req.body)
    res.json(req.body);

    db.models.create({
        title,
        author,
        genre,
        year
    })
    

})

module.exports = router;