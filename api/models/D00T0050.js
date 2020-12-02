/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D00T0050 = sequelize.define('D00T0050', {
        serverVersion: {
            type: DataTypes.CHAR,
            allowNull: true,
            field: 'ServerVersion'
        },
        lastModified: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: '(getdate())',
            field: 'LastModified'
        },
        databaseName: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'DatabaseName'
        },
        ftpurl: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'FTPURL'
        }
    }, {
        tableName: 'D00T0050'
    });

    D00T0050.associate = function (models) {
        models.D00T0050.hasOne(models.D00T0035);
        models.D00T0050.hasOne(models.D00T0096);
    };

    return D00T0050;
};
