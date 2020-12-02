/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D29T0202', {
        attendanceCardId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AttendanceCardID'
        },
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeID'
        },
        attendanceCardNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AttendanceCardNo'
        },
        effectiveDateFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'EffectiveDateFrom'
        },
        effectiveDateTo: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'EffectiveDateTo'
        }
    }, {
        tableName: 'D29T0202'
    });
};
