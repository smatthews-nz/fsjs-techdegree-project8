//require express
const express = require('express');
//initialize express router
const router = express.Router();

router.get('/books', (req, res) => {
    res.render('index');
})

module.exports = router;