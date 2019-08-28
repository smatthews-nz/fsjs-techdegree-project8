//require Sequelize
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Book extends Sequelize.Model{}
    Book.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for the title'
                },
                notEmpty: {
                    msg: 'Please provide a value for the title'
                }
            }
        },
        author: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please provide a value for the author'
                },
                notEmpty: {
                    msg: 'Please provide a value for the author'
                }
            }
        },
        genre: {
            type: Sequelize.STRING,
        },
        year: {
            type: Sequelize.INTEGER,
        }

    }, {sequelize});
    
    return Book;
}

