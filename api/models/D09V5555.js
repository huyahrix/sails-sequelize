/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D09V5555 = sequelize.define('D09V5555', {
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmployeeID',
            primaryKey: true
        },
        departmentId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DepartmentID'
        },
        teamId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'TeamID'
        },
        empGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmpGroupID'
        },
        dutyId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DutyID'
        },
        workId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'WorkID'
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'FirstName'
        },
        firstNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'FirstNameU'
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'LastName'
        },
        lastNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'LastNameU'
        },
        middleName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'MiddleName'
        },
        middleNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'MiddleNameU'
        },
        dBirthdate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DBirthdate'
        },
        undefinedBd: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'UndefinedBD'
        },
        birthDate: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'BirthDate'
        },
        statusId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'StatusID'
        },
        dateJoined: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateJoined'
        },
        dateLeft: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateLeft'
        },
        attendanceCardNo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'AttendanceCardNo'
        },
        refEmployeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'RefEmployeeID'
        },
        divisionName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DivisionName'
        },
        divisionNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DivisionNameU'
        },
        employeeName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmployeeName'
        },
        employeeNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmployeeNameU'
        },
        blockId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'BlockID'
        },
        blockName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'BlockName'
        },
        blockNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'BlockNameU'
        },
        departmentName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DepartmentName'
        },
        departmentNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DepartmentNameU'
        },
        departmentName01U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DepartmentName01U'
        },
        teamName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'TeamName'
        },
        teamNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'TeamNameU'
        },
        teamName01: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'TeamName01'
        },
        teamName01U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'TeamName01U'
        },
        empGroupName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmpGroupName'
        },
        empGroupNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmpGroupNameU'
        },
        empGroupName01: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmpGroupName01'
        },
        empGroupName01U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmpGroupName01U'
        },
        dutyName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DutyName'
        },
        dutyNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DutyNameU'
        },
        dutyName01: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DutyName01'
        },
        dutyName01U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DutyName01U'
        },
        workName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'WorkName'
        },
        workNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'WorkNameU'
        },
        workName01: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'WorkName01'
        },
        workName01U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'WorkName01U'
        },
        statusName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'StatusName'
        },
        statusNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'StatusNameU'
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'Age'
        },
        sexName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'SexName'
        },
        sexNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'SexNameU'
        },
        sexName01: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'SexName01'
        },
        sexName01U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'SexName01U'
        },
        projectName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ProjectName'
        },
        projectNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ProjectNameU'
        },
        blockDisplayOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'BlockDisplayOrder'
        },
        depDisplayOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'DepDisplayOrder'
        },
        teamDisplayOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'TeamDisplayOrder'
        },
        egDisplayOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'EGDisplayOrder'
        },
        dutyDisplayOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'DutyDisplayOrder'
        },
        empDisplayOrder: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'EmpDisplayOrder'
        },
        workFormId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'WorkFormID'
        },
        dateContractSigned: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateContractSigned'
        },
        laborContractEndedDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LaborContractEndedDate'
        },
        dateRecruited: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateRecruited'
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
        workingTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'WorkingTypeID'
        },
        disabled: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'Disabled'
        },
        rootEmployeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'RootEmployeeID'
        },
        isUseD15: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'IsUseD15'
        },
        isUseD21: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'IsUseD21'
        },
        divisionId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DivisionID'
        },
        sex: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            field: 'Sex'
        },
        ethnicId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EthnicID'
        },
        religionId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ReligionID'
        },
        countryId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'CountryID'
        },
        armyRankId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ArmyRankID'
        },
        issuedPlaceId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IssuedPlaceID'
        },
        birthPlace: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'BirthPlace'
        },
        birthPlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'BirthPlaceU'
        },
        employeeStreet: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EmployeeStreet'
        },
        employeeStreetU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmployeeStreetU'
        },
        contactAddress: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ContactAddress'
        },
        contactAddressU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ContactAddressU'
        },
        numIdCard: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'NumIDCard'
        },
        numIdCardDate: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'NumIDCardDate'
        },
        numIdCardDate1: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'NumIDCardDate1'
        },
        numIdCardPlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'NumIDCardPlaceU'
        },
        numIdCardPlace: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'NumIDCardPlace'
        },
        laborBookNo: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'LaborBookNo'
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Alias'
        },
        aliasU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'AliasU'
        },
        professionalLevelId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ProfessionalLevelID'
        },
        cityId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'CityID'
        },
        districtId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DistrictID'
        },
        employeeGroupId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EmployeeGroupID'
        },
        projectId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ProjectID'
        },
        ref01: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref01'
        },
        ref02: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref02'
        },
        ref03: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref03'
        },
        ref04: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref04'
        },
        ref05: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref05'
        },
        ref06: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref06'
        },
        ref07: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref07'
        },
        ref08: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref08'
        },
        ref09: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref09'
        },
        ref10: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref10'
        },
        ref11: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref11'
        },
        ref12: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref12'
        },
        ref13: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref13'
        },
        ref14: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref14'
        },
        ref15: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref15'
        },
        ref16: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref16'
        },
        ref17: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref17'
        },
        ref18: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref18'
        },
        ref19: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref19'
        },
        ref20: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Ref20'
        },
        ref01U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref01U'
        },
        ref02U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref02U'
        },
        ref03U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref03U'
        },
        ref04U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref04U'
        },
        ref05U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref05U'
        },
        ref06U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref06U'
        },
        ref07U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref07U'
        },
        ref08U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref08U'
        },
        ref09U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref09U'
        },
        ref10U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref10U'
        },
        ref11U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref11U'
        },
        ref12U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref12U'
        },
        ref13U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref13U'
        },
        ref14U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref14U'
        },
        ref15U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref15U'
        },
        ref16U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref16U'
        },
        ref17U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref17U'
        },
        ref18U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref18U'
        },
        ref19U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref19U'
        },
        ref20U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'Ref20U'
        },
        incomeTaxCode: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IncomeTaxCode'
        },
        populationId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'PopulationID'
        },
        isForeigner: {
            type: DataTypes.INTEGER,
            allowNull: false,
            field: 'IsForeigner'
        },
        empDaGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmpDAGroupID'
        },
        armyRankDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'ArmyRankDate'
        },
        majorId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'MajorID'
        },
        educationLevelId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EducationLevelID'
        },
        employeeTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmployeeTypeID'
        },
        telephone: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Telephone'
        },
        mobilephone: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Mobilephone'
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Email'
        },
        jobDescription: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'JobDescription'
        },
        jobDescriptionU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'JobDescriptionU'
        },
        dutyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DutyDate'
        },
        nativePlace: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'NativePlace'
        },
        nativePlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'NativePlaceU'
        },
        dutyGroupId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DutyGroupID'
        },
        dutyManagerId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DutyManagerID'
        },
        workingPlaceId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'WorkingPlaceID'
        },
        laborContractCode: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'LaborContractCode'
        },
        locationId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'LocationID'
        },
        employeeWard: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EmployeeWard'
        },
        employeeWardU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmployeeWardU'
        },
        revAchieveTypeId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'RevAchieveTypeID'
        },
        industryId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IndustryID'
        },
        industryName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IndustryName'
        },
        industryNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IndustryNameU'
        },
        careerId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'CareerID'
        },
        careerName: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'CareerName'
        },
        careerNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'CareerNameU'
        },
        trousersSize: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'TrousersSize'
        },
        shirtSize: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ShirtSize'
        },
        shoesSize: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ShoesSize'
        },
        clothesSize: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ClothesSize'
        },
        suggesterId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'SuggesterID'
        },
        suggesterName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'SuggesterName'
        },
        suggesterNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'SuggesterNameU'
        },
        employeeTypeName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EmployeeTypeName'
        },
        employeeTypeNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EmployeeTypeNameU'
        },
        politicsId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'PoliticsID'
        },
        politicsName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'PoliticsName'
        },
        politicsNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'PoliticsNameU'
        },
        maritalNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'MaritalNameU'
        },
        maritalName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'MaritalName'
        },
        professionalLevelName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ProfessionalLevelName'
        },
        professionalLevelNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ProfessionalLevelNameU'
        },
        contractGroupId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ContractGroupID'
        },
        contractGroupNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ContractGroupNameU'
        },
        contractGroupName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ContractGroupName'
        },
        majorName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'MajorName'
        },
        majorNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'MajorNameU'
        },
        religionName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ReligionName'
        },
        religionNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ReligionNameU'
        },
        ethnicName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EthnicName'
        },
        ethnicNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EthnicNameU'
        },
        populationName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'PopulationName'
        },
        populationNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'PopulationNameU'
        },
        workFormName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'WorkFormName'
        },
        workFormNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'WorkFormNameU'
        },
        provisionalAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ProvisionalAddress'
        },
        provisionalAddressU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'ProvisionalAddressU'
        },
        pager: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'Pager'
        },
        emContactName1: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactName1'
        },
        emContactAddress1: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactAddress1'
        },
        emContactPhone1: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactPhone1'
        },
        emContactName2: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactName2'
        },
        emContactAddress2: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactAddress2'
        },
        emContactPhone2: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactPhone2'
        },
        emContactName1U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactName1U'
        },
        emContactAddress1U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactAddress1U'
        },
        emContactPhone1U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactPhone1U'
        },
        emContactName2U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactName2U'
        },
        emContactAddress2U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactAddress2U'
        },
        emContactPhone2U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'EmContactPhone2U'
        },
        educationLevelName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EducationLevelName'
        },
        educationLevelNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EducationLevelNameU'
        },
        laborBookIssuedDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LaborBookIssuedDate'
        },
        laborBookIssuedPlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'LaborBookIssuedPlaceU'
        },
        laborBookIssuedPlace: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'LaborBookIssuedPlace'
        },
        educationFormId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'EducationFormID'
        },
        directManagerId: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'DirectManagerID'
        },
        workingStatusName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'WorkingStatusName'
        },
        reportEthnicId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'ReportEthnicID'
        },
        personalEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'PersonalEmail'
        },
        idCard: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'IDCard'
        },
        idCardDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'IDCardDate'
        },
        idCardPlaceU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IDCardPlaceU'
        },
        idCardPlace: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IDCardPlace'
        },
        orgchartId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'OrgchartID'
        },
        salEmpGroupId: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'SalEmpGroupID'
        },
        dutyGroupNameU: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'DutyGroupNameU'
        },
        isManager: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IsManager'
        },
        isManagerU: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IsManagerU'
        },
        isManager01: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IsManager01'
        },
        isManager01U: {
            type: DataTypes.STRING,
            allowNull: false,
            field: 'IsManager01U'
        }
    }, {
        tableName: 'D09V5555'
    });

    D09V5555.associate = function (models) {
        models.D09V5555.hasOne(models.D09T0201);
        models.D09V5555.hasOne(models.D91T0017);
        models.D09V5555.hasOne(models.D09T0300);
        models.D09V5555.hasOne(models.D13T0201);
        models.D09V5555.hasOne(models.D13T1020);
        models.D09V5555.hasOne(models.D15T1010);
        models.D09V5555.hasOne(models.D15T1040);
        models.D09V5555.hasOne(models.D09T2310);
        models.D09V5555.hasOne(models.D29T0203);
        models.D09V5555.hasOne(models.D29T0202);
        models.D09V5555.hasOne(models.D00T0030);
        models.D09V5555.hasOne(models.D09V5555, {as: 'SELF_D09V5555'});
    };

    return D09V5555;
};
