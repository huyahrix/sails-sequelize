/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('W00V1015', {
        screenTypeNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'ScreenTypeNo'
        },
        screenType: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ScreenType'
        },
        screenTypeName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ScreenTypeName'
        },
        screenTypeName01: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ScreenTypeName01'
        }
    }, {
        tableName: 'W00V1015'
    });
};
