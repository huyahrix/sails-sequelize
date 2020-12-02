/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D91T0017', {
        countryId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'CountryID'
        },
        countryName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CountryName'
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
        countryNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CountryNameU'
        },
        countryName01U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CountryName01U'
        },
        countryName01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CountryName01'
        },
        internationalCode3: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'InternationalCode3'
        },
        isDefaultValues: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsDefaultValues'
        },
        internationalCode2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'InternationalCode2'
        }
    }, {
        tableName: 'D91T0017'
    });
};
