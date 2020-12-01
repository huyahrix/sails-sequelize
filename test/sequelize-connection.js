const Sequelize = require('sequelize');
const sequelize = new Sequelize('DRD02V41', 'sa', '@abc123@', {
    host: '10.0.0.12',
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