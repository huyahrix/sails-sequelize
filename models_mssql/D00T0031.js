/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D00T0031 = sequelize.define('D00T0031', {
        accessId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'AccessID'
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'D00T0030',
                key: 'UserID'
            },
            field: 'UserID'
        },
        companyId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'D00T0040',
                key: 'CompanyID'
            },
            field: 'CompanyID'
        },
        permission: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '00=0;',
            field: 'Permission'
        },
        dateEntered: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'DateEntered'
        },
        dateLastModified: {
            type: DataTypes.DATE,
            allowNull: false,
            field: 'DateLastModified'
        }
    }, {
        tableName: 'D00T0031'
    });

    D00T0031.associate = function (models) {
        models.D00T0031.hasOne(models.D00T0030);
        models.D00T0031.hasOne(models.D00T0035);
    };
    return D00T0031;
};
