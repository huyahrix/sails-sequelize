/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D09T1504', {
        transId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'TransID'
        },
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeID'
        },
        laborLicense: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LaborLicense'
        },
        llDateFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LLDateFrom'
        },
        llDateTo: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LLDateTo'
        },
        extendDateFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'ExtendDateFrom'
        },
        extendDateTo: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'ExtendDateTo'
        },
        notesU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NotesU'
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Notes'
        }
    }, {
        tableName: 'D09T1504'
    });
};
