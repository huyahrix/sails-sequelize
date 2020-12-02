/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D29T0203 = sequelize.define('D29T0203', {
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeID'
        },
        transId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'TransID'
        },
        payrollFormId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PayrollFormID'
        },
        pfDateFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'PFDateFrom'
        },
        pfDateTo: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'PFDateTo'
        }
    }, {
        tableName: 'D29T0203'
    });

    D29T0203.associate = function (models) {
        models.D29T0203.hasOne(models.D29T0203, {as: 'SELF_D29T0203'});
    };

    return D29T0203;
};
