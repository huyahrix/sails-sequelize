/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D91T0012', {
        departmentId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'DepartmentID'
        },
        departmentName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'DepartmentName'
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'Disabled'
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
            allowNull: true,
            defaultValue: '',
            field: 'LastModifyUserID'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: '(getdate())',
            field: 'LastModifyDate'
        },
        divisionId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DivisionID'
        },
        consoDepartmentId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ConsoDepartmentID'
        },
        typeId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'TypeID'
        },
        daGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DAGroupID'
        },
        foundationDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'FoundationDate'
        },
        decisionNum: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DecisionNum'
        },
        blockId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BlockID'
        },
        depDisplayOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'DepDisplayOrder'
        },
        departmentNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DepartmentNameU'
        },
        departmentName01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DepartmentName01'
        },
        departmentName01U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DepartmentName01U'
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: '_ID'
        },
        directDutyId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DirectDutyID'
        },
        departmentGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DepartmentGroupID'
        }
    }, {
        tableName: 'D91T0012'
    });
};
