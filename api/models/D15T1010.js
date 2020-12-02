/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D15T1010 = sequelize.define('D15T1010', {
        divisionId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'DivisionID'
        },
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'EmployeeID'
        },
        leaveQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            field: 'LeaveQuantity'
        },
        lastReviewDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LastReviewDate'
        },
        nextReviewDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'NextReviewDate'
        },
        nextLeaveQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextLeaveQuantity'
        },
        leaveApplyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LeaveApplyDate'
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Note'
        },
        attendanceCardNo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AttendanceCardNo'
        },
        cardAttendance: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CardAttendance'
        },
        defaultShiftId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'DefaultShiftID'
        },
        createUserId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CreateUserID'
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'CreateDate'
        },
        lastModifyUserId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LastModifyUserID'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LastModifyDate'
        },
        leaveObjectId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LeaveObjectID'
        },
        interruptDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'InterruptDate'
        },
        leaveBalance: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'LeaveBalance'
        },
        effectiveDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'EffectiveDate'
        },
        effectiveMonth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EffectiveMonth'
        },
        leaveBySeniority: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'LeaveBySeniority'
        },
        noteU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NoteU'
        },
        cycleDayFrom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'CycleDayFrom'
        },
        cycleMonthFrom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'CycleMonthFrom'
        },
        cycleDayTo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'CycleDayTo'
        },
        cycleMonthTo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'CycleMonthTo'
        },
        senApplyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'SenApplyDate'
        },
        isDefaultTimeInOut: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsDefaultTimeInOut'
        },
        isNotProcessingAtt: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsNotProcessingAtt'
        }
    }, {
        tableName: 'D15T1010'
    });

    D15T1010.associate = function (models) {
        models.D15T1010.hasOne(models.D15T1040, {as: 'T40', foreignKey: 'leaveObjectId', sourceKey: 'leaveObjectId'});
    };

    return D15T1010;
};
