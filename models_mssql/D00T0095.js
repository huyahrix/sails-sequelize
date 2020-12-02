/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D00T0095 = sequelize.define('D00T0095', {
        roleId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'RoleID'
        },
        roleName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RoleName'
        },
        disabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'Disabled'
        },
        strCompanyId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'StrCompanyID'
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.NOW,
            field: 'CreateDate'
        },
        createUserId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CreateUserID'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: sequelize.NOW,
            field: 'LastModifyDate'
        },
        lastModifyUserId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LastModifyUserID'
        }
    }, {
        tableName: 'D00T0095',
        /*getterMethods: {
            strCompanySplit() {
                return this.getDataValue('strCompanyId').split(',');
            }
        }*/
    });

    D00T0095.associate = function (models) {
        models.D00T0095.hasOne(models.D00T0050);
    };

    return D00T0095;
};
