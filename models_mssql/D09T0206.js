/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D09T0206 = sequelize.define('D09T0206', {
        educationLevelId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'EducationLevelID'
        },
        educationLevelName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EducationLevelName'
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
            allowNull: false,
            defaultValue: '',
            field: 'LastModifyUserID'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'LastModifyDate'
        },
        raceEducation: {
            type: 'SMALLMONEY',
            allowNull: true,
            field: 'RaceEducation'
        },
        educationLevelNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EducationLevelNameU'
        },
        eduCategoryId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EduCategoryID'
        }
    }, {
        tableName: 'D09T0206'
    });
    return D09T0206;
};
