/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D09T1360', {
        logId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'LogID'
        },
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeID'
        },
        dateIn: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateIn'
        },
        dateOut: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateOut'
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Note'
        },
        noteU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NoteU'
        }
    }, {
        tableName: 'D09T1360'
    });
};
