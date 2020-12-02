const Sequelize = require('sequelize');

const sequelize = new Sequelize('lemonsys', 'sa', '@abc123@', {
    host: '127.0.0.1',
    dialect: 'mssql',
    dialectOptions: {
        encrypt: true
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });