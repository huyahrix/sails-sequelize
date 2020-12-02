/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D09T0300', {
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'EmployeeID'
        },
        employeePicture: {
            type: 'IMAGE',
            allowNull: true,
            field: 'EmployeePicture'
        }
    }, {
        tableName: 'D09T0300'
    });
};
