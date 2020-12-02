/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D00T0515', {
        PositionID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        ScreenID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        IsPermission: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        TransID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        OrgchartID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        ProjectID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        SalEmpGroupID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        ModifyUserID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        ModifyDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        CompanyID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        }
    }, {
        tableName: 'D00T0515'
    });
};
