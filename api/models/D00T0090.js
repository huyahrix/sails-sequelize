/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D00T0090', {
        roleId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'RoleID'
        },
        roleName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RoleName'
        },
        disabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Disabled'
        },
        createUserId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CreateUserID'
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'CreateDate'
        },
        lastModifyUserId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LastModifyUserID'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'LastModifyDate'
        },
        roleNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RoleNameU'
        },
        approvalMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ApprovalMode'
        },
        isApproval: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsApproval'
        },
        isCheckDuplicate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsCheckDuplicate'
        },
        isPermission: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsPermission'
        },
        strCompanyId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'StrCompanyID'
        }
    }, {
        tableName: 'D00T0090'
    });
};
