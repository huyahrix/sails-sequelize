/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D09T2310', {
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeID'
        },
        trialSalaryRate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'TrialSalaryRate'
        },
        tValidDateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'TValidDateEnd'
        },
        tActualValidDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'TActualValidDate'
        },
        mainSalaryRate: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'MainSalaryRate'
        },
        mValidDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'MValidDate'
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
        numAttendanceTrial: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumAttendanceTrial'
        },
        numAttendanceMain: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumAttendanceMain'
        }
    }, {
        tableName: 'D09T2310'
    });
};
