/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const W00V1020 = sequelize.define('W00V1020', {
        formId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'FormID',
        },
        formDesc: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'FormDesc'
        },
        formDescEnglisth: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'FormDescEnglisth'
        },
        formActive: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'FormActive',
        },
        displayOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'DisplayOrder'
        },
        screenType: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ScreenType'
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'TYPE',
            primaryKey: true
        },
        moduleId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ModuleID'
        }
    }, {
        tableName: 'W00V1020'
    });

    W00V1020.associate = function (models) {
        models.W00V1020.hasOne(models.W00V1021);
    };

    return W00V1020;
};
