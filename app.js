//require express
const express = require('express');
//declare development port
const port = process.env.PORT || 3000;

//require database
const db = require('./db')

//create an express application
const app = express();

/*
ROUTING-------------------------------//
*/
//setting the route for index
const index = require('./routes/index')
app.use(index);

//setting the route for /books
const books = require('./routes/books');
app.use(books);


(async () => {
    try {
        await db.sequelize.authenticate();
        console.log('Connection to the database successful!');
    } catch (error){
        console.error('Error connecting to the database: ', error);
    }
})();


//set the app to listen to port 3000
app.listen(port, () =>  {
    console.log('Project is running on port 3000')
})