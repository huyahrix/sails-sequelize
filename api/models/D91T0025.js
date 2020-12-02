/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    const D91T0025 = sequelize.define('D91T0025', {
        companyName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyName'
        },
        companyStreet: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyStreet'
        },
        companyPhone: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyPhone'
        },
        companyFax: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyFax'
        },
        companyEmail: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyEmail'
        },
        chiefAccountant: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'ChiefAccountant'
        },
        director: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'Director'
        },
        periodNumber: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'PeriodNumber'
        },
        createUserId: {
            type: DataTypes.CHAR,
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
            type: DataTypes.CHAR,
            allowNull: true,
            defaultValue: '',
            field: 'LastModifyUserID'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'LastModifyDate'
        },
        companyWard: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyWard'
        },
        companyWeb: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyWeb'
        },
        companyDistrict: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyDistrict'
        },
        vatCode: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'VATCode'
        },
        companyCity: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'CompanyCity'
        },
        vatAccountId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '133',
            field: 'VATAccountID'
        },
        baseCurrencyId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'BaseCurrencyID'
        },
        assestVatAccountId: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '1331',
            field: 'AssestVATAccountID'
        },
        profitTaxRate: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'ProfitTaxRate'
        },
        dbid: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'DBID'
        },
        d90ConvertedDecimals: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '(0)',
            field: 'D90_ConvertedDecimals'
        },
        exchangeRateDecimals: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'ExchangeRateDecimals'
        },
        d07ConvertedDecimals: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'D07_ConvertedDecimals'
        },
        d07QuantityDecimals: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'D07_QuantityDecimals'
        },
        d07UnitCostDecimals: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'D07_UnitCostDecimals'
        },
        d08ConvertedDecimals: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'D08_ConvertedDecimals'
        },
        d08QuantityDecimals: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'D08_QuantityDecimals'
        },
        d08UnitCostDecimals: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'D08_UnitCostDecimals'
        },
        dateFormat: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'DateFormat'
        },
        decimalSeparator: {
            type: DataTypes.CHAR,
            allowNull: true,
            defaultValue: '',
            field: 'DecimalSeparator'
        },
        thousandSeparator: {
            type: DataTypes.CHAR,
            allowNull: true,
            defaultValue: '',
            field: 'ThousandSeparator'
        },
        exchangeRateDecimails: {
            type: DataTypes.INTEGER,
            allowNull: true,
            field: 'ExchangeRateDecimails'
        },
        serialNoUpperCase: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '(0)',
            field: 'SerialNoUpperCase'
        },
        addressLine1: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AddressLine1'
        },
        addressLine2: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AddressLine2'
        },
        addressLine3: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AddressLine3'
        },
        addressLine4: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AddressLine4'
        },
        addressLine5: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: '',
            field: 'AddressLine5'
        },
        d08RatioDecimals: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'D08_RatioDecimals'
        },
        d08BomDecimals: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(5)',
            field: 'D08_BOMDecimals'
        },
        refDbName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'RefDBName'
        },
        companyName01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyName01'
        },
        companyAddress01: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyAddress01'
        },
        bankAccountNo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BankAccountNo'
        },
        bankAccountName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BankAccountName'
        },
        isLoadTxtInv: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsLoadTxtINV'
        },
        isLoadTxtObj: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsLoadTxtOBJ'
        },
        isLoadTxtCardNo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsLoadTxtCardNo'
        },
        companyNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyNameU'
        },
        companyStreetU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyStreetU'
        },
        chiefAccountantU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ChiefAccountantU'
        },
        directorU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DirectorU'
        },
        companyWardU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyWardU'
        },
        addressLine1U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AddressLine1U'
        },
        addressLine2U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AddressLine2U'
        },
        addressLine3U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AddressLine3U'
        },
        addressLine4U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AddressLine4U'
        },
        addressLine5U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'AddressLine5U'
        },
        companyName01U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyName01U'
        },
        companyAddress01U: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyAddress01U'
        },
        bankAccountNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BankAccountNameU'
        },
        isUnicodeLemon3Erp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsUnicodeLemon3ERP'
        },
        isUnicodeLemonHr: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsUnicodeLemonHR'
        },
        isUnicodeLemonFinance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsUnicodeLemonFinance'
        },
        companyDistrictU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyDistrictU'
        },
        product: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Product'
        },
        manType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ManType'
        },
        isWithhodingTax: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsWithhodingTax'
        },
        companyCityU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'CompanyCityU'
        },
        simType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SimType'
        },
        businessType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BusinessType'
        },
        businessTypeName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'BusinessTypeName'
        },
        serverIpAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ServerIPAddress'
        },
        serverPassword: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ServerPassword'
        },
        isMedia: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsMedia'
        },
        isPrintVni: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsPrintVNI'
        },
        isD91P9119New: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsD91P9119New'
        },
        loadFormNotInv: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LoadFormNotINV'
        },
        isFillterName: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsFillterName'
        },
        dataReceiveCompany: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DataReceiveCompany'
        },
        voucherRefreshMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'VoucherRefreshMode'
        },
        dbType: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DBType'
        },
        dbLink: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DBLink'
        },
        timeFilterMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'TimeFilterMode'
        },
        logoPicture: {
            type: 'IMAGE',
            allowNull: true,
            field: 'LogoPicture'
        },
        isFilterNewFormat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((1))',
            field: 'IsFilterNewFormat'
        }
    }, {
        tableName: 'D91T0025'
    });

    D91T0025.associate = function (models) {
        models.D91T0025.hasOne(models.D09T0201);
        models.D91T0025.hasOne(models.D09T9999);
    };

    return D91T0025;
};
