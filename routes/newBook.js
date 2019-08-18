//require express
const express = require('express');
//initialize express router
const router = express.Router();

//add routing for new book form
router.get('/books/new', (req,res) => {
    res.render('newBook')
});

router.post('/books/new', (req, res) => {
    console.log('Post route activated');
})

module.exports = router;