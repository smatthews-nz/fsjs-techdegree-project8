//require express
const express = require('express');
//declare development port
const port = process.env.PORT || 3000;

//create an express application
const app = express();

//set the view engine to pug
app.set('view engine', 'pug');

//serve static assets
app.use('/static', express.static('public'));

/*
ROUTING-------------------------------//
*/
//setting the route for index
const index = require('./routes/index');
app.use(index);

//setting the route for /books
const books = require('./routes/books');
app.use(books);

//setting the route for creating new books
const newBooks = require('./routes/newBook');
app.use(newBooks);

//setting the route for updating books
const updateBook = require('./routes/updateBook');
app.use(updateBook);


/*
ERROR HANDLING-------------------------------//
*/
//middleware to handle any errors
app.use((req, res, next) => {
    const error = new Error('Sorry, URL not found');
    error.status = 404;
    res.status(error.status);
    res.render('page-not-found');
});

//if non-matching error
app.use((err, req, res, next) => {
    const error = new Error('Sorry, URL not found');
    error.status = 404;
    res.status(error.status);
    res.render('page-not-found');
});
/*
END OF ERROR HANDLING-------------------------------//
*/


//set the app to listen to port 3000
app.listen(port, () =>  {
    console.log('Project is running on port 3000')
})