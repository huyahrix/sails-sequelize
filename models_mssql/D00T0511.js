/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D00T0511 = sequelize.define('D00T0511', {
        screenId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'ScreenID'
        },
        screenName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ScreenName'
        },
        moduleId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ModuleID'
        },
        screenName01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ScreenName01'
        },
        screenType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ScreenType'
        },
        orderNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'OrderNo'
        },
        formActive: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'FormActive'
        },
        disabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'Disabled'
        },
        nodeParent: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NodeParent'
        },
        isOldWeb: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'IsOldWeb'
        }
    }, {
        tableName: 'D00T0511'
    });

    D00T0511.associate = function (models) {
        models.D00T0511.hasOne(models.W00V1015);
    };

    return D00T0511;
};
