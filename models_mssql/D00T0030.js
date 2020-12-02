/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D00T0030 = sequelize.define('D00T0030', {
        UserID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        },
        UserName: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UserDepartment: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UserPassword: {
            type: DataTypes.STRING,
            allowNull: true
        },
        UserVerify: {
            type: DataTypes.STRING,
            allowNull: true
        },
        DateEntered: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())'
        },
        DateLastModified: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())'
        },
        UserGroupID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        CreateUserID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        LastModifyUserID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        Remote: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        IPAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        MachineID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        TimeFrom: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        TimeTo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        ExpiryDays: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        LastPChange: {
            type: DataTypes.DATE,
            allowNull: true
        },
        Violations: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        ViolationDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        ULanguage: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        Disabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        TelNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        TelExt: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        FaxNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        MobileNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        Remark: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        UseDynamicPassword: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        UserNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        UserDepartmentU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        RemarkU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        IsDesktop: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        D91DepartmentID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        HREmployeeID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        AppServer: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        ReportServer: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        DefaultPage: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        IsPermissionSvrUpg: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        IsPermissionManCCUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        IsSysManUser: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))'
        },
        LogonToken: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        UserDutyNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        UserDutyName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: ''
        },
        UserPicture: {
            type: 'VARBINARY',
            allowNull: true
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: 'D00T0030'
    });
    D00T0030.associate = function (models) {
        models.D00T0030.hasOne(models.D00T0031);
        models.D00T0030.hasOne(models.D00T0035);
    };
    return D00T0030;
};
