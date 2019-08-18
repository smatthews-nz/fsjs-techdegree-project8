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
const index = require('./routes/index')
app.use(index);

//setting the route for /books
const books = require('./routes/books');
app.use(books);


//set the app to listen to port 3000
app.listen(port, () =>  {
    console.log('Project is running on port 3000')
})