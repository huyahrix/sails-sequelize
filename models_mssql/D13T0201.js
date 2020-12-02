/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D13T0201 = sequelize.define('D13T0201', {
        divisionId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'DivisionID'
        },
        employeeId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'EmployeeID'
        },
        baseSalary01: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'BaseSalary01'
        },
        baseSalary02: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'BaseSalary02'
        },
        baseSalary03: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'BaseSalary03'
        },
        baseSalary04: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'BaseSalary04'
        },
        nextBaseSalary01: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextBaseSalary01'
        },
        nextBaseSalary02: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextBaseSalary02'
        },
        nextBaseSalary03: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextBaseSalary03'
        },
        nextBaseSalary04: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextBaseSalary04'
        },
        dateBaseSalary01: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateBaseSalary01'
        },
        dateBaseSalary02: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateBaseSalary02'
        },
        dateBaseSalary03: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateBaseSalary03'
        },
        dateBaseSalary04: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'DateBaseSalary04'
        },
        salCoefficient01: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient01'
        },
        salCoefficient02: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient02'
        },
        salCoefficient03: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient03'
        },
        salCoefficient04: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient04'
        },
        salCoefficient05: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient05'
        },
        salCoefficient06: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient06'
        },
        salCoefficient07: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient07'
        },
        salCoefficient08: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient08'
        },
        salCoefficient09: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient09'
        },
        salCoefficient10: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SalCoefficient10'
        },
        ins01Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins01Check'
        },
        ins02Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins02Check'
        },
        ins03Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins03Check'
        },
        ins04Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins04Check'
        },
        ins05Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins05Check'
        },
        ins06Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins06Check'
        },
        ins07Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins07Check'
        },
        ins08Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins08Check'
        },
        ins09Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins09Check'
        },
        ins10Check: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'Ins10Check'
        },
        ins01Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins01Ref'
        },
        ins02Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins02Ref'
        },
        ins03Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins03Ref'
        },
        ins04Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins04Ref'
        },
        ins05Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins05Ref'
        },
        ins06Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins06Ref'
        },
        ins07Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins07Ref'
        },
        ins08Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins08Ref'
        },
        ins09Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins09Ref'
        },
        ins10Ref: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ins10Ref'
        },
        taxObjectId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'TaxObjectID'
        },
        taxCode: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'TaxCode'
        },
        lastReviewDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LastReviewDate'
        },
        nextReviewDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'NextReviewDate'
        },
        bankId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BankID'
        },
        bankAccountNo: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BankAccountNo'
        },
        paymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'C',
            field: 'PaymentMethod'
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
            field: 'LastModifyDate'
        },
        isNew: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '(0)',
            field: 'IsNew'
        },
        officalTitleId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'OfficalTitleID'
        },
        salaryLevelId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'SalaryLevelID'
        },
        saCoefficient: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient'
        },
        exchangeDep: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ExchangeDep'
        },
        accountHolderName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AccountHolderName'
        },
        bankId2: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BankID2'
        },
        bankAccountNo2: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BankAccountNo2'
        },
        exchangeDep2: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ExchangeDep2'
        },
        accountHolderName2: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AccountHolderName2'
        },
        pmAccount01Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount01ID'
        },
        pmAccount02Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount02ID'
        },
        pmAccount03Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount03ID'
        },
        pmAccount04Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount04ID'
        },
        pmAccount05Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount05ID'
        },
        pmAccount06Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount06ID'
        },
        pmAccount07Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount07ID'
        },
        pmAccount08Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount08ID'
        },
        pmAccount09Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount09ID'
        },
        pmAccount10Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'PMAccount10ID'
        },
        ana01Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana01ID'
        },
        ana02Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana02ID'
        },
        ana03Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana03ID'
        },
        ana04Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana04ID'
        },
        ana05Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana05ID'
        },
        ana06Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana06ID'
        },
        ana07Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana07ID'
        },
        ana08Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana08ID'
        },
        ana09Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana09ID'
        },
        ana10Id: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Ana10ID'
        },
        objectTypeId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ObjectTypeID'
        },
        objectId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ObjectID'
        },
        officalTitleId2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficalTitleID2'
        },
        salaryLevelId2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalaryLevelID2'
        },
        saCoefficient2: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient2'
        },
        offSa1DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'OffSa1DateEnd'
        },
        offSa1NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'OffSa1NextDate'
        },
        offSa2DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'OffSa2DateEnd'
        },
        offSa2NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'OffSa2NextDate'
        },
        baseSalary01DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'BaseSalary01DateEnd'
        },
        baseSalary01NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'BaseSalary01NextDate'
        },
        baseSalary02DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'BaseSalary02DateEnd'
        },
        baseSalary02NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'BaseSalary02NextDate'
        },
        baseSalary03DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'BaseSalary03DateEnd'
        },
        baseSalary03NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'BaseSalary03NextDate'
        },
        baseSalary04DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'BaseSalary04DateEnd'
        },
        baseSalary04NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'BaseSalary04NextDate'
        },
        sal01DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal01DateEnd'
        },
        sal02DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal02DateEnd'
        },
        sal03DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal03DateEnd'
        },
        sal04DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal04DateEnd'
        },
        sal05DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal05DateEnd'
        },
        sal06DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal06DateEnd'
        },
        sal07DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal07DateEnd'
        },
        sal08DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal08DateEnd'
        },
        sal09DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal09DateEnd'
        },
        sal10DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal10DateEnd'
        },
        sal01NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal01NextDate'
        },
        sal02NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal02NextDate'
        },
        sal03NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal03NextDate'
        },
        sal04NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal04NextDate'
        },
        sal05NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal05NextDate'
        },
        sal06NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal06NextDate'
        },
        sal07NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal07NextDate'
        },
        sal08NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal08NextDate'
        },
        sal09NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal09NextDate'
        },
        sal10NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal10NextDate'
        },
        nextOfficalTitleId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NextOfficalTitleID'
        },
        nextSalaryLevelId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NextSalaryLevelID'
        },
        nextOfficalTitleId2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NextOfficalTitleID2'
        },
        nextSalaryLevelId2: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NextSalaryLevelID2'
        },
        nextSalaryCoefficient: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient'
        },
        nextSalaryCoefficient2: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient2'
        },
        nextSalCoefficient01: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient01'
        },
        nextSalCoefficient02: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient02'
        },
        nextSalCoefficient03: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient03'
        },
        nextSalCoefficient04: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient04'
        },
        nextSalCoefficient05: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient05'
        },
        nextSalCoefficient06: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient06'
        },
        nextSalCoefficient07: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient07'
        },
        nextSalCoefficient08: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient08'
        },
        nextSalCoefficient09: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient09'
        },
        nextSalCoefficient10: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalCoefficient10'
        },
        p01Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P01ID'
        },
        p02Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P02ID'
        },
        p03Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P03ID'
        },
        p04Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P04ID'
        },
        p05Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P05ID'
        },
        p06Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P06ID'
        },
        p07Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P07ID'
        },
        p08Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P08ID'
        },
        p09Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P09ID'
        },
        p10Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P10ID'
        },
        p11Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P11ID'
        },
        p12Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P12ID'
        },
        p13Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P13ID'
        },
        p14Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P14ID'
        },
        p15Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P15ID'
        },
        p16Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P16ID'
        },
        p17Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P17ID'
        },
        p18Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P18ID'
        },
        p19Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P19ID'
        },
        p20Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'P20ID'
        },
        isTransferEmail: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsTransferEmail'
        },
        isSpecialProcessing: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsSpecialProcessing'
        },
        saCoefficient12: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient12'
        },
        saCoefficient13: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient13'
        },
        saCoefficient14: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient14'
        },
        saCoefficient15: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient15'
        },
        saCoefficient22: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient22'
        },
        saCoefficient23: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient23'
        },
        saCoefficient24: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient24'
        },
        saCoefficient25: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SaCoefficient25'
        },
        nextSalaryCoefficient12: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient12'
        },
        nextSalaryCoefficient13: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient13'
        },
        nextSalaryCoefficient14: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient14'
        },
        nextSalaryCoefficient15: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient15'
        },
        nextSalaryCoefficient22: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient22'
        },
        nextSalaryCoefficient23: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient23'
        },
        nextSalaryCoefficient24: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient24'
        },
        nextSalaryCoefficient25: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'NextSalaryCoefficient25'
        },
        salaryObjectId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalaryObjectID'
        },
        accountHolderNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AccountHolderNameU'
        },
        accountHolderName2U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AccountHolderName2U'
        },
        exchangeDepU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ExchangeDepU'
        },
        exchangeDep2U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ExchangeDep2U'
        },
        bankAccountNoU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BankAccountNoU'
        },
        bankAccountNo2U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BankAccountNo2U'
        },
        salEmpGroupId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalEmpGroupID'
        },
        salCoefficient11: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient11'
        },
        salCoefficient12: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient12'
        },
        salCoefficient13: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient13'
        },
        salCoefficient14: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient14'
        },
        salCoefficient15: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient15'
        },
        salCoefficient16: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient16'
        },
        salCoefficient17: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient17'
        },
        salCoefficient18: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient18'
        },
        salCoefficient19: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient19'
        },
        salCoefficient20: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SalCoefficient20'
        },
        nextSalCoefficient11: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient11'
        },
        nextSalCoefficient12: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient12'
        },
        nextSalCoefficient13: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient13'
        },
        nextSalCoefficient14: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient14'
        },
        nextSalCoefficient15: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient15'
        },
        nextSalCoefficient16: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient16'
        },
        nextSalCoefficient17: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient17'
        },
        nextSalCoefficient18: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient18'
        },
        nextSalCoefficient19: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient19'
        },
        nextSalCoefficient20: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NextSalCoefficient20'
        },
        sal11DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal11DateEnd'
        },
        sal12DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal12DateEnd'
        },
        sal13DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal13DateEnd'
        },
        sal14DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal14DateEnd'
        },
        sal15DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal15DateEnd'
        },
        sal16DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal16DateEnd'
        },
        sal17DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal17DateEnd'
        },
        sal18DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal18DateEnd'
        },
        sal19DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal19DateEnd'
        },
        sal20DateEnd: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal20DateEnd'
        },
        sal11NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal11NextDate'
        },
        sal12NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal12NextDate'
        },
        sal13NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal13NextDate'
        },
        sal14NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal14NextDate'
        },
        sal15NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal15NextDate'
        },
        sal16NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal16NextDate'
        },
        sal17NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal17NextDate'
        },
        sal18NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal18NextDate'
        },
        sal19NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal19NextDate'
        },
        sal20NextDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'Sal20NextDate'
        },
        numRef03: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef03'
        },
        numRef01: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef01'
        },
        numRef02: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef02'
        },
        numRef04: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef04'
        },
        numRef05: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef05'
        },
        numRef06: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef06'
        },
        numRef07: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef07'
        },
        numRef08: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef08'
        },
        numRef09: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef09'
        },
        numRef10: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumRef10'
        },
        baseCurrencyId01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BaseCurrencyID01'
        },
        baseCurrencyId02: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BaseCurrencyID02'
        },
        baseCurrencyId03: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BaseCurrencyID03'
        },
        baseCurrencyId04: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BaseCurrencyID04'
        },
        salCoeCurrencyId01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID01'
        },
        salCoeCurrencyId02: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID02'
        },
        salCoeCurrencyId03: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID03'
        },
        salCoeCurrencyId04: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID04'
        },
        salCoeCurrencyId05: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID05'
        },
        salCoeCurrencyId06: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID06'
        },
        salCoeCurrencyId07: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID07'
        },
        salCoeCurrencyId08: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID08'
        },
        salCoeCurrencyId10: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID10'
        },
        salCoeCurrencyId11: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID11'
        },
        salCoeCurrencyId12: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID12'
        },
        salCoeCurrencyId13: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID13'
        },
        salCoeCurrencyId14: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID14'
        },
        salCoeCurrencyId15: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID15'
        },
        salCoeCurrencyId16: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID16'
        },
        salCoeCurrencyId17: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID17'
        },
        salCoeCurrencyId18: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID18'
        },
        salCoeCurrencyId19: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID19'
        },
        salCoeCurrencyId20: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID20'
        },
        salCoeCurrencyId09: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalCoeCurrencyID09'
        },
        firstSalaryMonth: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'FirstSalaryMonth'
        },
        passSalaryFile: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'PassSalaryFile'
        },
        numMonthBase01: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthBase01'
        },
        numMonthBase02: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthBase02'
        },
        numMonthBase03: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthBase03'
        },
        numMonthBase04: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthBase04'
        },
        numMonthSalCoe01: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe01'
        },
        numMonthSalCoe02: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe02'
        },
        numMonthSalCoe03: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe03'
        },
        numMonthSalCoe04: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe04'
        },
        numMonthSalCoe05: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe05'
        },
        numMonthSalCoe06: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe06'
        },
        numMonthSalCoe07: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe07'
        },
        numMonthSalCoe08: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe08'
        },
        numMonthSalCoe09: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe09'
        },
        numMonthSalCoe10: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe10'
        },
        numMonthSalCoe11: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe11'
        },
        numMonthSalCoe12: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe12'
        },
        numMonthSalCoe13: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe13'
        },
        numMonthSalCoe14: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe14'
        },
        numMonthSalCoe15: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe15'
        },
        numMonthSalCoe16: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe16'
        },
        numMonthSalCoe17: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe17'
        },
        numMonthSalCoe18: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe18'
        },
        numMonthSalCoe19: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe19'
        },
        numMonthSalCoe20: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'NumMonthSalCoe20'
        },
        levelBase01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelBase01'
        },
        levelBase02: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelBase02'
        },
        levelBase03: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelBase03'
        },
        levelBase04: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelBase04'
        },
        levelSalCoe01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe01'
        },
        levelSalCoe02: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe02'
        },
        levelSalCoe03: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe03'
        },
        levelSalCoe04: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe04'
        },
        levelSalCoe05: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe05'
        },
        levelSalCoe06: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe06'
        },
        levelSalCoe07: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe07'
        },
        levelSalCoe08: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe08'
        },
        levelSalCoe09: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe09'
        },
        levelSalCoe10: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe10'
        },
        levelSalCoe11: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe11'
        },
        levelSalCoe12: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe12'
        },
        levelSalCoe13: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe13'
        },
        levelSalCoe14: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe14'
        },
        levelSalCoe15: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe15'
        },
        levelSalCoe16: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe16'
        },
        levelSalCoe17: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe17'
        },
        levelSalCoe18: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe18'
        },
        levelSalCoe19: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe19'
        },
        levelSalCoe20: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LevelSalCoe20'
        },
        officialBase01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialBase01'
        },
        officialBase02: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialBase02'
        },
        officialBase03: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialBase03'
        },
        officialBase04: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialBase04'
        },
        officialSalCoe01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe01'
        },
        officialSalCoe02: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe02'
        },
        officialSalCoe03: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe03'
        },
        officialSalCoe04: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe04'
        },
        officialSalCoe05: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe05'
        },
        officialSalCoe06: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe06'
        },
        officialSalCoe07: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe07'
        },
        officialSalCoe08: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe08'
        },
        officialSalCoe09: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe09'
        },
        officialSalCoe10: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe10'
        },
        officialSalCoe11: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe11'
        },
        officialSalCoe12: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe12'
        },
        officialSalCoe13: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe13'
        },
        officialSalCoe14: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe14'
        },
        officialSalCoe15: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe15'
        },
        officialSalCoe16: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe16'
        },
        officialSalCoe17: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe17'
        },
        officialSalCoe18: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe18'
        },
        officialSalCoe19: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe19'
        },
        officialSalCoe20: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'OfficialSalCoe20'
        }
    }, {
        tableName: 'D13T0201'
    });

    D13T0201.associate = function(models) {
        models.D13T0201.hasOne(models.D13T1020, {as: 'T102', foreignKey: 'salaryObjectId', sourceKey: 'salaryObjectId'});
        models.D13T0201.belongsTo(models.D09V5555, {as: 'T555', foreignKey: 'divisionId', targetKey: 'divisionId'});
    };
    return D13T0201;
};
