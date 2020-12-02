/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D09T1080 = sequelize.define('D09T1080', {
        projectId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'ProjectID'
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Description'
        },
        placeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PlaceID'
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Note'
        },
        disabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
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
            allowNull: true,
            field: 'LastModifyDate'
        },
        descriptionU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DescriptionU'
        },
        noteU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NoteU'
        },
        coef01: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef01'
        },
        coef02: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef02'
        },
        coef03: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef03'
        },
        coef04: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef04'
        },
        coef05: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef05'
        },
        coef06: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef06'
        },
        coef07: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef07'
        },
        coef08: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef08'
        },
        coef09: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef09'
        },
        coef10: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Coef10'
        },
        projectDisplayOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ProjectDisplayOrder'
        },
        description01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Description01'
        },
        refPro01: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro01'
        },
        refPro02: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro02'
        },
        refPro03: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro03'
        },
        refPro04: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro04'
        },
        refPro05: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro05'
        },
        refPro06: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro06'
        },
        refPro07: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro07'
        },
        refPro08: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro08'
        },
        refPro09: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro09'
        },
        refPro10: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro10'
        },
        refPro11: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro11'
        },
        refPro12: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro12'
        },
        refPro13: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro13'
        },
        refPro14: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro14'
        },
        refPro15: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro15'
        },
        refPro16: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro16'
        },
        refPro17: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro17'
        },
        refPro18: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro18'
        },
        refPro19: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro19'
        },
        refPro20: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RefPro20'
        }
    }, {
        tableName: 'D09T1080',

        setterMethods: {
            fullName(name) {
                this.setDataValue('tableName', name.concat(this.tableName));
            }
        }
    });

    return D09T1080;
};
