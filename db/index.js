//require Sequelize
const Sequelize = require('sequelize');
//Set up Sequelize instance and configure
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'library.db'
});
//define and configure database
const db ={
    sequelize,
    Sequelize,
    models:{}
}

//define model
db.models.Book = require('./models/book.js')(sequelize);

//export db
module.exports = db;