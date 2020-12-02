/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D09T9999 = sequelize.define('D09T9999', {
        divisionId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'DivisionID'
        },
        tranMonth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            field: 'TranMonth'
        },
        tranYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            field: 'TranYear'
        },
        closing: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'Closing'
        },
        quarter: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Quarter'
        },
        createUserId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CreateUserID'
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: true,
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
            field: 'LastModifyDate'
        }
    }, {
        tableName: 'D09T9999'
    });

    D09T9999.associate = function (models) {
        models.D09T9999.hasOne(models.D09T0000);
        models.D09T9999.belongsTo(models.D91T0025);
    };

    return D09T9999;
};
