const { DataTypes } = require('sequelize');
const { sequelize } = require('../db'); // Import your Sequelize instance

const Sale = sequelize.define('Sale', {
    invoice_no: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    date_time: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
});

// sequelize.sync();

module.exports = Sale;
