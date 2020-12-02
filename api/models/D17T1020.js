/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D17T1020', {
        companyId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'CompanyID'
        },
        companyTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'CompanyTypeID'
        },
        contactId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'ContactID'
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FirstName'
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'MiddleName'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'LastName'
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FullName'
        },
        gender: {
            type: DataTypes.CHAR,
            allowNull: true,
            field: 'Gender'
        },
        jobPosition: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'JobPosition'
        },
        department: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Department'
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Title'
        },
        isFinance: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'IsFinance'
        },
        isSales: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'IsSales'
        },
        isOperations: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'IsOperations'
        },
        isSupport: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'IsSupport'
        },
        isAdmin: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'IsAdmin'
        },
        homeTelNo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'HomeTelNo'
        },
        officeTelNo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'OfficeTelNo'
        },
        officeFaxNo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'OfficeFaxNo'
        },
        mobileNo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'MobileNo'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Email'
        },
        homeAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'HomeAddress'
        },
        note: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Note'
        },
        dateOfBirth: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateOfBirth'
        },
        addressId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AddressID'
        },
        contactStatus: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ContactStatus'
        },
        disabled: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Disabled'
        },
        createUserId: {
            type: DataTypes.STRING,
            allowNull: true,
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
            field: 'LastModifyUserID'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LastModifyDate'
        },
        fullNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'FullNameU'
        },
        homeAddressU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'HomeAddressU'
        },
        contactStatusU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ContactStatusU'
        },
        noteU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NoteU'
        },
        jobPositionU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'JobPositionU'
        },
        departmentU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DepartmentU'
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: '',
            field: 'Birthday'
        },
        passportValidFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: '',
            field: 'PassportValidFrom'
        },
        passportValidTo: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: '',
            field: 'PassportValidTo'
        },
        passport: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Passport'
        },
        vocativeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'VocativeID'
        },
        contactPositionId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ContactPositionID'
        },
        contactGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ContactGroupID'
        },
        email2: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Email2'
        },
        skype: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Skype'
        },
        facebook: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Facebook'
        },
        isDefault: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'IsDefault'
        }
    }, {
        tableName: 'D17T1020'
    });
};
