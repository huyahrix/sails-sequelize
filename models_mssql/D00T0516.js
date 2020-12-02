/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D00T0516 = sequelize.define('D00T0516', {
        transId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'TransID'
        },
        roleId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RoleID'
        },
        screenId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ScreenID'
        },
        isPermission: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'IsPermission'
        },
        orgchartId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OrgchartID'
        },
        projectId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ProjectID'
        },
        salEmpGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalEmpGroupID'
        },
        modifyUserId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ModifyUserID'
        },
        modifyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'ModifyDate'
        },
        companyId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyID'
        }
    }, {
        tableName: 'D00T0516'
    });

    D00T0516.associate = function (models) {
        models.D00T0516.hasOne(models.D00T0095);
        models.D00T0516.hasOne(models.D00T0511);
        models.D00T0516.hasOne(models.D09T1005);
        models.D00T0516.hasOne(models.D09T1080);
        models.D00T0516.hasOne(models.D13T1180);
    };

    return D00T0516;
};
