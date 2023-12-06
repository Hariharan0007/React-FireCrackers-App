const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); // Import your Sequelize instance

const Cracker = sequelize.define('Cracker', {
    cracker_id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    cracker_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price_per_box: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    available_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});


// sequelize.sync();


module.exports = Cracker;

