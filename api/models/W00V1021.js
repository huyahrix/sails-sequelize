/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('W00V1021', {
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Type',
        },
        iconId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IconID',
            primaryKey: true
        },
        iconName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IconName'
        }
    }, {
        tableName: 'W00V1021'
    });
};
