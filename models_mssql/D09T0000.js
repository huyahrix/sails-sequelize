/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D09T0000', {
        employeeAuto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmployeeAuto'
        },
        employeeS1Enabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmployeeS1Enabled'
        },
        employeeS1Default: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EmployeeS1Default'
        },
        employeeS2Enabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmployeeS2Enabled'
        },
        employeeS2Default: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EmployeeS2Default'
        },
        employeeS3Enabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmployeeS3Enabled'
        },
        employeeS3Default: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'EmployeeS3Default'
        },
        employeeOutputOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'EmployeeOutputOrder'
        },
        employeeOutputLength: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'EmployeeOutputLength'
        },
        employeeSeperator: {
            type: DataTypes.CHAR,
            allowNull: true,
            defaultValue: '',
            field: 'EmployeeSeperator'
        },
        employeeSeperated: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmployeeSeperated'
        },
        absentTypeAuto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'AbsentTypeAuto'
        },
        absentTypeS1Enabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'AbsentTypeS1Enabled'
        },
        absentTypeS1Default: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AbsentTypeS1Default'
        },
        absentTypeOutputOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'AbsentTypeOutputOrder'
        },
        absentTypeOutputLength: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'AbsentTypeOutputLength'
        },
        absentTypeSeperator: {
            type: DataTypes.CHAR,
            allowNull: true,
            defaultValue: '',
            field: 'AbsentTypeSeperator'
        },
        absentTypeSeperated: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'AbsentTypeSeperated'
        },
        subsidizeAuto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SubsidizeAuto'
        },
        subsidizeS1Enabled: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SubsidizeS1Enabled'
        },
        subsidizeS1Default: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'SubsidizeS1Default'
        },
        subsidizeOutputOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'SubsidizeOutputOrder'
        },
        subsidizeOutputLength: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'SubsidizeOutputLength'
        },
        subsidizeSeperator: {
            type: DataTypes.CHAR,
            allowNull: true,
            defaultValue: '',
            field: 'SubsidizeSeperator'
        },
        subsidizeSeperated: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SubsidizeSeperated'
        },
        currentMonth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'CurrentMonth'
        },
        currentYear: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'CurrentYear'
        },
        divisionId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'DivisionID'
        },
        divisionLocked: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'DivisionLocked'
        },
        baseSalaryDefault: {
            type: 'MONEY',
            allowNull: true,
            field: 'BaseSalaryDefault'
        },
        methodSalary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'MethodSalary'
        },
        objectSalary: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'ObjectSalary'
        },
        payableDefaultAccountId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PayableDefaultAccountID'
        },
        ortherPayableDefaultAccountId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'OrtherPayableDefaultAccountID'
        },
        advPaymentDefaultAccountId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AdvPaymentDefaultAccountID'
        },
        taxDefaultAccountId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'TaxDefaultAccountID'
        },
        rateFactory: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'RateFactory'
        },
        insuSocialDefault: {
            type: 'SMALLMONEY',
            allowNull: true,
            field: 'InsuSocialDefault'
        },
        insuHealDefault: {
            type: 'SMALLMONEY',
            allowNull: true,
            field: 'InsuHealDefault'
        },
        traUnionExpDefault: {
            type: 'SMALLMONEY',
            allowNull: true,
            field: 'TraUnionExpDefault'
        },
        inflaPriceDefault: {
            type: 'SMALLMONEY',
            allowNull: true,
            field: 'InflaPriceDefault'
        },
        numWorkDateDefault: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'NumWorkDateDefault'
        },
        receiveInsSocialDefault: {
            type: 'SMALLMONEY',
            allowNull: true,
            field: 'ReceiveInsSocialDefault'
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
        ynMarkDate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'YNMarkDate'
        },
        salaryGroup: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'SalaryGroup'
        },
        companySocialRate: {
            type: 'MONEY',
            allowNull: true,
            field: 'CompanySocialRate'
        },
        companyHealRate: {
            type: 'MONEY',
            allowNull: true,
            field: 'CompanyHealRate'
        },
        companyUnionRate: {
            type: 'MONEY',
            allowNull: true,
            field: 'CompanyUnionRate'
        },
        lunchMoney: {
            type: 'MONEY',
            allowNull: true,
            field: 'LunchMoney'
        },
        objectSocial: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ObjectSocial'
        },
        objectHeal: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ObjectHeal'
        },
        objectPayTax: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ObjectPayTax'
        },
        objectUnion: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ObjectUnion'
        },
        tranferTaxAuto: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'TranferTaxAuto'
        },
        isSendD03: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsSendD03'
        },
        sendValueD03: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SendValueD03'
        },
        isSendD04: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsSendD04'
        },
        sendValueD04: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SendValueD04'
        },
        isSendD08: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsSendD08'
        },
        sendValueD08: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SendValueD08'
        },
        updateEmHistory: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'UpdateEmHistory'
        },
        autoLaborcontractId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'AutoLaborcontractID'
        },
        laborContractS1Type: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'LaborContractS1Type'
        },
        laborContractS1: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LaborContractS1'
        },
        laborContractS2Type: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'LaborContractS2Type'
        },
        laborContractS2: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LaborContractS2'
        },
        laborContractS3Type: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'LaborContractS3Type'
        },
        laborContractS3: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LaborContractS3'
        },
        laborContractOutputOrder: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'LaborContractOutputOrder'
        },
        laborContractOutputLength: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'LaborContractOutputLength'
        },
        laborContractSeparator: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'LaborContractSeparator'
        },
        isSupplement: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsSupplement'
        },
        isPrefix: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsPrefix'
        },
        isSuffix: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsSuffix'
        },
        isAuto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsAuto'
        },
        lcSalaryFormula: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LCSalaryFormula'
        },
        lcBenefitFormula: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LCBenefitFormula'
        },
        isUseBlock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsUseBlock'
        },
        employeeS1Type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmployeeS1Type'
        },
        employeeS2Type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmployeeS2Type'
        },
        employeeS3Type: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmployeeS3Type'
        },
        decisionNumCheck: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'DecisionNumCheck'
        },
        empNormCheck: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EmpNormCheck'
        },
        notUseAutoNum: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NotUseAutoNum'
        },
        isUseDecisionNum: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsUseDecisionNum'
        },
        isWarningD21: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsWarningD21'
        },
        isAutoLcAppendix: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsAutoLCAppendix'
        },
        lcaFormula: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LCAFormula'
        },
        decisionNumAuto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'DecisionNumAuto'
        },
        isAutoRefEmp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsAutoRefEmp'
        },
        refEmpFormular: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RefEmpFormular'
        },
        isAutoAttCardNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsAutoAttCardNo'
        },
        attCardNoFormular: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AttCardNoFormular'
        },
        copyEmpToD91Object: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'CopyEmpToD91Object'
        },
        isCustomResource: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsCustomResource'
        },
        isEnterDisRewardMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsEnterDisRewardMode'
        },
        isCheckBackPay: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsCheckBackPay'
        },
        isGetMaternityPolicy: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsGetMaternityPolicy'
        },
        isCheckEmpFilter: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsCheckEmpFilter'
        },
        salaryRate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalaryRate'
        },
        salaryTimeMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalaryTimeMode'
        },
        dateJoinedMonthNum: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'DateJoinedMonthNum'
        },
        formatDateType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'dd/MM/yyyy',
            field: 'FormatDateType'
        },
        isAutoTaskId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsAutoTaskID'
        },
        empPluralityAuto: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'EmpPluralityAuto'
        }
    }, {
        tableName: 'D09T0000'
    });
};
