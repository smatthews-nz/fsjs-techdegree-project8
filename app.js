//require express
const express = require('express');
//declare development port
const port = process.env.PORT || 3000;

//create an express application
const app = express();

//set the app to listen to port 3000
app.listen(port, () =>  {
    console.log('Project is running on port 3000')
})