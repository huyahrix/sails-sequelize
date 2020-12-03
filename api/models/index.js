'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// var config = {
//   host: process.env.MSSQL_SERVER,
//   dialect: 'mssql',
//   logging: false,
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   },
//   dialectOptions: {
//     encrypt: true
//   }
// }

var config = {
  host: process.env.MSSQL_SERVER,
    dialect: 'mssql',
    define: {
        underscored: false,
        freezeTableName: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: false
    },
}
const db = {};

let sequelize;
if (process.env.use_env_variable) {
  sequelize = new Sequelize(process.env[process.env.use_env_variable], config);
} else {
  sequelize = new Sequelize(process.env.DHR_DB_NAME, process.env.DHR_DB_USER, process.env.DHR_DB_PASS, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
console.log(db);
module.exports = db;
