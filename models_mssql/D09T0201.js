/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D09T0201 = sequelize.define('D09T0201', {
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'EmployeeID'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LastName'
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'MiddleName'
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'FirstName'
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Alias'
        },
        dutyId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'DutyID'
        },
        birthdate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Birthdate'
        },
        birthPlace: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BirthPlace'
        },
        nativePlace: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'NativePlace'
        },
        populationId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PopulationID'
        },
        contactAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ContactAddress'
        },
        cityId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CityID'
        },
        districtId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'DistrictID'
        },
        employeeStreet: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EmployeeStreet'
        },
        employeeWard: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EmployeeWard'
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Telephone'
        },
        employeeGroupId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EmployeeGroupID'
        },
        employeeType: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'EmployeeType'
        },
        fax: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Fax'
        },
        ethnicId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EthnicID'
        },
        countryId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CountryID'
        },
        classId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ClassID'
        },
        objectTypeId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ObjectTypeID'
        },
        religionId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ReligionID'
        },
        departmentId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'DepartmentID'
        },
        pastRecruits: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PastRecruits'
        },
        dateRecruited: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateRecruited'
        },
        placeRecruited: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PlaceRecruited'
        },
        dateJoined: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateJoined'
        },
        workId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'WorkID'
        },
        majorId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'MajorID'
        },
        yearGraduated: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'YearGraduated'
        },
        schoolId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'SchoolID'
        },
        educationLevelId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EducationLevelID'
        },
        professionalLevelId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ProfessionalLevelID'
        },
        educationFormId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EducationFormID'
        },
        dateServiceStarted: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateServiceStarted'
        },
        dateServiceEnded: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateServiceEnded'
        },
        topRank: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'TopRank'
        },
        numIdCard: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'NumIDCard'
        },
        numSocialInsurance: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'NumSocialInsurance'
        },
        numMedicalInsurance: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'NumMedicalInsurance'
        },
        officalTitleId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'OfficalTitleID'
        },
        baseSalary: {
            type: 'MONEY',
            allowNull: true,
            field: 'BaseSalary'
        },
        salaryLevelId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'SalaryLevelID'
        },
        employmentType: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'EmploymentType'
        },
        dateContractSigned: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateContractSigned'
        },
        dateInsuSocialBegin: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateInsuSocialBegin'
        },
        maritalStatus: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'MaritalStatus'
        },
        physicalConditions: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PhysicalConditions'
        },
        height: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Height'
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Weight'
        },
        invalidityGrade: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '(0)',
            field: 'InvalidityGrade'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Email'
        },
        pager: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Pager'
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'Disabled'
        },
        bloodGroup: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BloodGroup'
        },
        fatherName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'FatherName'
        },
        fatherBirthDate: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FatherBirthDate'
        },
        fatherAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'FatherAddress'
        },
        fatherOccupation: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'FatherOccupation'
        },
        fatherAlive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'FatherAlive'
        },
        fatherNote: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'FatherNote'
        },
        motherName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'MotherName'
        },
        motherBirthDate: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'MotherBirthDate'
        },
        motherAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'MotherAddress'
        },
        motherOccupation: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'MotherOccupation'
        },
        motherAlive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'MotherAlive'
        },
        motherNote: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'MotherNote'
        },
        bankAccount: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BankAccount'
        },
        dateSalaryRated: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateSalaryRated'
        },
        spouseName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'SpouseName'
        },
        spouseBirthDate: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'SpouseBirthDate'
        },
        spouseAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'SpouseAddress'
        },
        spouseOccupation: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'SpouseOccupation'
        },
        spouseAlive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'SpouseAlive'
        },
        spouseNote: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'SpouseNote'
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: '0',
            field: 'Sex'
        },
        politicsId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PoliticsID'
        },
        divisionId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'DivisionID'
        },
        raceFactory: {
            type: 'MONEY',
            allowNull: true,
            defaultValue: '(0)',
            field: 'RaceFactory'
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
        workFormId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'WorkFormID'
        },
        numIdCardDate: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'NumIDCardDate'
        },
        numIdCardPlace: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'NumIDCardPlace'
        },
        teamId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'TeamID'
        },
        salaryInSurance: {
            type: 'MONEY',
            allowNull: true,
            defaultValue: '(0)',
            field: 'SalaryInSurance'
        },
        imageId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ImageID'
        },
        raceAdjust: {
            type: 'MONEY',
            allowNull: true,
            defaultValue: '(0)',
            field: 'RaceAdjust'
        },
        taxObjectId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'TaxObjectID'
        },
        consoEmployeeId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ConsoEmployeeID'
        },
        passport: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Passport'
        },
        passportBegin: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'PassportBegin'
        },
        passportEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'PassportEnd'
        },
        bankId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BankID'
        },
        bankAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BankAddress'
        },
        isRetirement: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsRetirement'
        },
        saCoefficient: {
            type: 'MONEY',
            allowNull: true,
            defaultValue: '(1)',
            field: 'SaCoefficient'
        },
        target01Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target01ID'
        },
        target02Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target02ID'
        },
        target03Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target03ID'
        },
        target04Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target04ID'
        },
        target05Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target05ID'
        },
        target06Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target06ID'
        },
        target07Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target07ID'
        },
        target08Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target08ID'
        },
        target09Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target09ID'
        },
        target10Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Target10ID'
        },
        targetAmount01: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount01'
        },
        targetAmount02: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount02'
        },
        targetAmount03: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount03'
        },
        targetAmount04: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount04'
        },
        targetAmount05: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount05'
        },
        targetAmount06: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount06'
        },
        targetAmount07: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount07'
        },
        targetAmount08: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount08'
        },
        targetAmount09: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount09'
        },
        targetAmount10: {
            type: 'MONEY',
            allowNull: true,
            field: 'TargetAmount10'
        },
        raceWorkForm: {
            type: 'MONEY',
            allowNull: true,
            field: 'RaceWorkForm'
        },
        raceWorkTime: {
            type: 'MONEY',
            allowNull: true,
            field: 'RaceWorkTime'
        },
        raceEducation: {
            type: 'MONEY',
            allowNull: true,
            field: 'RaceEducation'
        },
        raceDuty: {
            type: 'MONEY',
            allowNull: true,
            field: 'RaceDuty'
        },
        coefficient07: {
            type: 'MONEY',
            allowNull: true,
            field: 'Coefficient07'
        },
        coefficient08: {
            type: 'MONEY',
            allowNull: true,
            field: 'Coefficient08'
        },
        coefficient09: {
            type: 'MONEY',
            allowNull: true,
            field: 'Coefficient09'
        },
        salaryAmount01: {
            type: 'MONEY',
            allowNull: true,
            field: 'SalaryAmount01'
        },
        salaryAmount02: {
            type: 'MONEY',
            allowNull: true,
            field: 'SalaryAmount02'
        },
        salaryAmount03: {
            type: 'MONEY',
            allowNull: true,
            field: 'SalaryAmount03'
        },
        salaryCoefficient: {
            type: 'MONEY',
            allowNull: true,
            field: 'SalaryCoefficient'
        },
        coefficient10: {
            type: 'MONEY',
            allowNull: true,
            field: 'Coefficient10'
        },
        statusId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'StatusID'
        },
        jobDescription: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'JobDescription'
        },
        nextReviewDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'NextReviewDate'
        },
        lastReviewDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '(getdate())',
            field: 'LastReviewDate'
        },
        taxCode: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'TaxCode'
        },
        socialInsPlace: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'SocialInsPlace'
        },
        laborContractCode: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LaborContractCode'
        },
        serviceEndedPlace: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ServiceEndedPlace'
        },
        laborContractEndedDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LaborContractEndedDate'
        },
        lastExamineDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LastExamineDate'
        },
        nextExamineDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'NextExamineDate'
        },
        hospitalId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'HospitalID'
        },
        companyTelephone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyTelephone'
        },
        healthInsPlace: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'HealthInsPlace'
        },
        healthInsDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'HealthInsDate'
        },
        laborBookNo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LaborBookNo'
        },
        attendanceCardNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AttendanceCardNo'
        },
        attendanceCardBegin: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'AttendanceCardBegin'
        },
        attendanceCardEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'AttendanceCardEnd'
        },
        ref01: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref01'
        },
        ref02: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref02'
        },
        ref03: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref03'
        },
        ref04: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref04'
        },
        ref05: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref05'
        },
        ref06: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref06'
        },
        ref07: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref07'
        },
        ref08: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref08'
        },
        ref09: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref09'
        },
        ref10: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref10'
        },
        ref11: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref11'
        },
        ref12: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref12'
        },
        ref13: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref13'
        },
        ref14: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref14'
        },
        ref15: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref15'
        },
        ref16: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref16'
        },
        ref17: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref17'
        },
        ref18: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref18'
        },
        ref19: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref19'
        },
        ref20: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ref20'
        },
        provisionalAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ProvisionalAddress'
        },
        trialDateFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'TrialDateFrom'
        },
        trialDateTo: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'TrialDateTo'
        },
        armyRankId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ArmyRankID'
        },
        armyRankDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'ArmyRankDate'
        },
        dutyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DutyDate'
        },
        laborBookIssuedDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LaborBookIssuedDate'
        },
        laborBookIssuedPlace: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LaborBookIssuedPlace'
        },
        noviciateDateFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'NoviciateDateFrom'
        },
        noviciateDateTo: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'NoviciateDateTo'
        },
        aDateFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'ADateFrom'
        },
        refEmployeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RefEmployeeID'
        },
        dateLeft: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateLeft'
        },
        revAchieveTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RevAchieveTypeID'
        },
        locationId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LocationID'
        },
        maritalStatus1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'MaritalStatus1'
        },
        tradeUnionJoinedDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'TradeUnionJoinedDate'
        },
        tradeUnionCardNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'TradeUnionCardNo'
        },
        partyJoinedDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'PartyJoinedDate'
        },
        partyCardNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PartyCardNo'
        },
        disRewardLevelId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DisRewardLevelID'
        },
        disRewardFormId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DisRewardFormID'
        },
        employeeTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeTypeID'
        },
        workingTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'WorkingTypeID'
        },
        isForeigner: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsForeigner'
        },
        laborLicense: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LaborLicense'
        },
        llDateFrom: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LLDateFrom'
        },
        llDateTo: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LLDateTo'
        },
        languageId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LanguageID'
        },
        languageLevelId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LanguageLevelID'
        },
        computingLevelId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ComputingLevelID'
        },
        academicTitleId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AcademicTitleID'
        },
        isUseD25: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsUseD25'
        },
        isUseD13: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsUseD13'
        },
        isUseD29: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsUseD29'
        },
        isUseD15: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsUseD15'
        },
        isUseD21: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsUseD21'
        },
        isUseD38: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsUseD38'
        },
        isUseD39: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsUseD39'
        },
        isUseD45: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsUseD45'
        },
        incomeTaxCode: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'IncomeTaxCode'
        },
        workingPlaceId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'WorkingPlaceID'
        },
        otherDivisionId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OtherDivisionID'
        },
        otherDepartmentId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OtherDepartmentID'
        },
        otherTeamId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OtherTeamID'
        },
        otherDutyId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OtherDutyID'
        },
        undefinedBd: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'UndefinedBD'
        },
        skill: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Skill'
        },
        knowledge: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Knowledge'
        },
        projectId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ProjectID'
        },
        empDaGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmpDAGroupID'
        },
        projectDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'ProjectDate'
        },
        rootEmployeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RootEmployeeID'
        },
        isRootEmpId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsRootEmpID'
        },
        empDisplayOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmpDisplayOrder'
        },
        lastNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'LastNameU'
        },
        middleNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'MiddleNameU'
        },
        firstNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'FirstNameU'
        },
        birthPlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BirthPlaceU'
        },
        nativePlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NativePlaceU'
        },
        contactAddressU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ContactAddressU'
        },
        employeeStreetU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeStreetU'
        },
        ref01U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref01U'
        },
        ref02U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref02U'
        },
        ref03U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref03U'
        },
        ref04U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref04U'
        },
        ref05U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref05U'
        },
        ref06U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref06U'
        },
        ref07U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref07U'
        },
        ref08U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref08U'
        },
        ref09U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref09U'
        },
        ref10U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref10U'
        },
        ref11U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref11U'
        },
        ref12U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref12U'
        },
        ref13U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref13U'
        },
        ref14U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref14U'
        },
        ref15U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref15U'
        },
        ref16U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref16U'
        },
        ref17U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref17U'
        },
        ref18U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref18U'
        },
        ref19U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref19U'
        },
        ref20U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'Ref20U'
        },
        serviceEndedPlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ServiceEndedPlaceU'
        },
        issuedPlaceId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'IssuedPlaceID'
        },
        knowledgeU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'KnowledgeU'
        },
        skillU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SkillU'
        },
        jobDescriptionU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'JobDescriptionU'
        },
        provisionalAddressU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ProvisionalAddressU'
        },
        pastRecruitsU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PastRecruitsU'
        },
        placeRecruitedU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PlaceRecruitedU'
        },
        laborBookIssuedPlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LaborBookIssuedPlaceU'
        },
        laborLicenseU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LaborLicenseU'
        },
        passportU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PassportU'
        },
        aliasU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AliasU'
        },
        ssAccountName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SSAccountName'
        },
        ssPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SSPassword'
        },
        spouseOccupationU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SpouseOccupationU'
        },
        spouseNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SpouseNameU'
        },
        spouseAddressU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SpouseAddressU'
        },
        fatherNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'FatherNameU'
        },
        motherNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'MotherNameU'
        },
        employeeWardU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeWardU'
        },
        mode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Mode'
        },
        undefinedNcd: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'UndefinedNCD'
        },
        undefinedIdDate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'UndefinedIDDate'
        },
        numIdCardDate1: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'NumIDCardDate1'
        },
        linkEmployeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LinkEmployeeID'
        },
        empGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmpGroupID'
        },
        trialPeriod: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'TrialPeriod'
        },
        pitIssueDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'PITIssueDate'
        },
        pitIssuePlaceId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PITIssuePlaceID'
        },
        undefinePitDate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'UndefinePITDate'
        },
        emContactAddress1: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactAddress1'
        },
        emContactAddress1U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactAddress1U'
        },
        emContactAddress2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactAddress2'
        },
        emContactAddress2U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactAddress2U'
        },
        emContactName1: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactName1'
        },
        emContactName1U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactName1U'
        },
        emContactName2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactName2'
        },
        emContactName2U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactName2U'
        },
        emContactPhone1: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactPhone1'
        },
        emContactPhone2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactPhone2'
        },
        emRelationId1: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmRelationID1'
        },
        emRelationId2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmRelationID2'
        },
        emContactPhone1U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactPhone1U'
        },
        emContactPhone2U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactPhone2U'
        },
        noviciatePeriod: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NoviciatePeriod'
        },
        woundedSolierId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'WoundedSolierID'
        },
        policyFamilyId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PolicyFamilyID'
        },
        industryId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'IndustryID'
        },
        careerId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CareerID'
        },
        directManagerId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DirectManagerID'
        },
        resAddressStreetU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ResAddressStreetU'
        },
        resAddressWardU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ResAddressWardU'
        },
        resAddressDistrictU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ResAddressDistrictU'
        },
        resAddressProvinceU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ResAddressProvinceU'
        },
        conAddressStreetU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ConAddressStreetU'
        },
        conAddressWardU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ConAddressWardU'
        },
        conAddressDistrictU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ConAddressDistrictU'
        },
        conAddressProvinceU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ConAddressProvinceU'
        },
        personalEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PersonalEmail'
        },
        emContactPhone: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactPhone'
        },
        emContactName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactName'
        },
        emContactAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmContactAddress'
        },
        unDefineIdCardDate: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'UnDefineIDCardDate'
        },
        idCard: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'IDCard'
        },
        idCardDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'IDCardDate'
        },
        idCardPlace: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'IDCardPlace'
        },
        orgChartId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OrgChartID'
        },
        employeeName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'EmployeeName'
        }
    }, {
        tableName: 'D09T0201'
    });

    D09T0201.associate = function (models) {
        models.D09T0201.hasOne(models.D00T0030);
        models.D09T0201.hasOne(models.D91T0012);
        models.D09T0201.hasOne(models.D09T1506, {as: 'T1'});
        models.D09T0201.hasOne(models.D09T1506, {as: 'T2'});
        models.D09T0201.hasOne(models.D09T1506, {as: 'T3'});
        models.D09T0201.hasOne(models.D09T1360);
        models.D09T0201.hasOne(models.D09T1504);
    };

    return D09T0201;
};
