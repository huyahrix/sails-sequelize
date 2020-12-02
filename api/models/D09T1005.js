/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D09T1005', {
        createUserId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CreateUserID'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'LastModifyDate'
        },
        lastModifyUserId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LastModifyUserID'
        },
        orgAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OrgAddress'
        },
        orgChartId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'OrgChartID'
        },
        transId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'TransID'
        },
        orgChartName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OrgChartName'
        },
        orgLevelId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OrgLevelID'
        },
        orgChartParentId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OrgChartParentID'
        },
        disabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Disabled'
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'CreateDate'
        },
        orgChartName01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OrgChartName01'
        }
    }, {
        tableName: 'D09T1005'
    });
};
