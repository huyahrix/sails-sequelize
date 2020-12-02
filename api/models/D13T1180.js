/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D13T1180', {
        salEmpGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalEmpGroupID'
        },
        salEmpGroupName84: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalEmpGroupName84'
        },
        salEmpGroupName84U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalEmpGroupName84U'
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
        lastModifyUserId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LastModifyUserID'
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'CreateDate'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'LastModifyDate'
        }
    }, {
        tableName: 'D13T1180'
    });
};
