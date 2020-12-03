'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

// var config = {
//   server:process.env.MSSQL_SERVER,
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

// const config = {
//   host: "localhost",
//   port: 1433,
//   dialect: 'mssql',
//   user: process.env.DHR_DB_USER,
//   password: process.env.DHR_DB_PASS,
//   server: 'localhost',
//   database: 'DRD02V41',
//   pool: {
//       max: 10,
//       min: 0,
//       idleTimeoutMillis: 30000
//   }
// }

const config = {
  dialect: 'mssql',
  host: process.env.DHR_DB_SERVER,
  //host: '127.0.0.1',
  port: 1433,
  logging: false,
  dialectOptions: {
    options: {
      encrypt: true,
      // trustServerCertificate: false,
      // hostNameInCertificate: '*.database.windows.net',
      loginTimeout: 30,
      validateBulkLoadParameters: true
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
}

// var config = {
//   host: process.env.MSSQL_SERVER,
//     dialect: 'mssql',
//     define: {
//         underscored: false,
//         freezeTableName: true,
//         charset: 'utf8',
//         dialectOptions: {
//             collate: 'utf8_general_ci'
//         },
//         timestamps: false
//     },
// }

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

module.exports = db;
