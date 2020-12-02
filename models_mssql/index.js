/**
 * @copyright 2018  © DigiNet
 * @author kimlong
 * @create 2019/02/07 16:08
 * @update 2019/02/07 16:08
 */
'use strict';
const Sequelize = require('sequelize');
const path = require('path');
const basename = path.basename(__filename);
const fs = require('fs');
const db = {};
const config = require('../../config/database');

var sequelizeLMS = new Sequelize(config.databaseLMS, config.username, config.password, {
    host: config.server,
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
});
var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.server,
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
});

fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const sModule = file.substring(0, 3);
        if (sModule === 'D00' || sModule === 'W00') {
            const model = sequelizeLMS['import'](path.join(__dirname, file));
            db[model.name] = model;
        } else {
            const model = sequelize['import'](path.join(__dirname, file));
            db[model.name] = model;
        }
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelizeLMS = sequelizeLMS;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
