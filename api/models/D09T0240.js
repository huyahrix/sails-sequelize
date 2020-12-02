/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D09T0240 = sequelize.define('D09T0240', {
        relationId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'RelationID'
        },
        relationName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RelationName'
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
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
        system: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'System'
        },
        relationNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RelationNameU'
        }
    }, {
        tableName: 'D09T0240'
    });
    return D09T0240;
};
