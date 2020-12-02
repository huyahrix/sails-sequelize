/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D09T0216 = sequelize.define('D09T0216', {
        relativeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'RelativeID'
        },
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeID'
        },
        relativeName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'RelativeName'
        },
        birthDate: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'BirthDate'
        },
        birthPlace: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BirthPlace'
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Address'
        },
        occupation: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Occupation'
        },
        educationLevelId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EducationLevelID'
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'Sex'
        },
        relationId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '(0)',
            field: 'RelationID'
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'Disabled'
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: '(getdate())',
            field: 'CreateDate'
        },
        createUserId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CreateUserID'
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
        salary: {
            type: 'MONEY',
            allowNull: false,
            defaultValue: '(0)',
            field: 'Salary'
        },
        incomeTaxCode: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'IncomeTaxCode'
        },
        idCardNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'IDCardNo'
        },
        isReduce: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsReduce'
        },
        reduceAmount: {
            type: 'MONEY',
            allowNull: false,
            defaultValue: '(0)',
            field: 'ReduceAmount'
        },
        deductibleDateBegin: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DeductibleDateBegin'
        },
        deductibleDateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DeductibleDateEnd'
        },
        alive: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'Alive'
        },
        deductibleAmount: {
            type: 'MONEY',
            allowNull: false,
            defaultValue: '(0)',
            field: 'DeductibleAmount'
        },
        note: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Note'
        },
        relativeNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RelativeNameU'
        },
        birthPlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BirthPlaceU'
        },
        addressU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AddressU'
        },
        occupationU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OccupationU'
        },
        noteU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NoteU'
        },
        birthDateU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BirthDateU'
        },
        birthDate1: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'BirthDate1'
        },
        undefinedBd: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'UndefinedBD'
        },
        isBenefit: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsBenefit'
        },
        effectDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'EffectDate'
        },
        examineDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'ExamineDate'
        },
        conAddressProvinceId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ConAddressProvinceID'
        },
        conAddressDistrictId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ConAddressDistrictID'
        },
        conAddressWardId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ConAddressWardID'
        },
        conAddressStreetU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ConAddressStreetU'
        },
        countryTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CountryTypeID'
        },
        birthCertificate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'BirthCertificate'
        },
        residentCertificate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ResidentCertificate'
        },
        marriageCertificate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'MarriageCertificate'
        },
        schoolConfirmation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SchoolConfirmation'
        },
        disabilityConfirmation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'DisabilityConfirmation'
        },
        bringUpConfirmation: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'BringUpConfirmation'
        },
        otherConfirmations: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'OtherConfirmations'
        },
        numBirthCertificate: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NumBirthCertificate'
        },
        bookBirthCertificate: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BookBirthCertificate'
        },
        noteConfirmation: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NoteConfirmation'
        },
        benefitNote: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BenefitNote'
        },
        owner: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Owner'
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Telephone'
        },
        residentBookNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ResidentBookNo'
        },
        paperTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PaperTypeID'
        },
        houseId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'HouseID'
        },
        reEmployeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ReEmployeeID'
        }
    }, {
        tableName: 'D09T0216'
    });

    D09T0216.associate = function (models) {
        models.D09T0216.hasOne(models.D09T0240);
        models.D09T0216.hasOne(models.D09T0206);
    };

    return D09T0216;

};
