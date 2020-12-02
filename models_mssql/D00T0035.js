/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D00T0035 = sequelize.define('D00T0035', {
        companyId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'CompanyID'
        },
        roleId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'RoleID'
        },
        dateEntered: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateEntered'
        },
        dateLastModified: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateLastModified'
        },
        permission: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Permission'
        }
    }, {
        tableName: 'D00T0035'
    });
    D00T0035.associate = function (models) {
        models.D00T0035.hasOne(models.D00T0096);
    };

    return D00T0035;
};
