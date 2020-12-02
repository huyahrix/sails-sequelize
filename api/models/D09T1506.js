/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D09T1506', {
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
        cardNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CardNo'
        },
        cardTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CardTypeID'
        },
        validDateFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'ValidDateFrom'
        },
        validDateTo: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'ValidDateTo'
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Notes'
        },
        notesU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NotesU'
        }
    }, {
        tableName: 'D09T1506'
    });
};
