//require express
const express = require('express');
//initialize express router
const router = express.Router();

//redirect from '/' to '/books' to render the books homepage
router.get('/', (req, res) => {
    res.redirect('/books');
    next();
});

module.exports = router;