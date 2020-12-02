/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D00T0096 = sequelize.define('D00T0096', {
        transID: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'TransID'
        },
        roleID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RoleID'
        },
        userID: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'UserID'
        },
        createUserID: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CreateUserID'
        },
        createDate: {
            type: 'TIMESTAMP',
            allowNull: true,
            defaultValue: sequelize.NOW,
            field: 'CreateDate'
        },
        lastModifyUserID: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LastModifyUserID'
        },
        lastModifyDate: {
            type: 'TIMESTAMP',
            allowNull: true,
            defaultValue: sequelize.NOW,
            field: 'LastModifyDate'
        },
        validDateFrom: {
            type: 'TIMESTAMP',
            allowNull: true,
            field: 'ValidDateFrom'
        },
        validDateTo: {
            type: 'TIMESTAMP',
            allowNull: true,
            field: 'ValidDateTo'
        },
        disabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
            field: 'Disabled'
        }
    }, {
        tableName: 'D00T0096'
    });
    D00T0096.associate = function(models){
        models.D00T0096.hasOne(models.D00T0030);
    };
    return D00T0096;
};
