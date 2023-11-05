const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db', // SQLite database file path
});


const connectToDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Successfully connected to Database...");
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sequelize, connectToDb};


