/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D13T1020', {
        salaryObjectId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            primaryKey: true,
            field: 'SalaryObjectID'
        },
        salaryObjectName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalaryObjectName'
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
        lastModifyUserId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LastModifyUserID'
        },
        createDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
            field: 'CreateDate'
        },
        lastModifyDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: '',
            field: 'LastModifyDate'
        },
        salaryObjectNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'SalaryObjectNameU'
        },
        n01Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N01ID'
        },
        n02Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N02ID'
        },
        n03Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N03ID'
        },
        n04Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N04ID'
        },
        n05Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N05ID'
        },
        n06Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N06ID'
        },
        n07Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N07ID'
        },
        n08Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N08ID'
        },
        n09Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N09ID'
        },
        n10Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N10ID'
        },
        n11Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N11ID'
        },
        n12Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N12ID'
        },
        n13Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N13ID'
        },
        n14Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N14ID'
        },
        n15Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N15ID'
        },
        n16Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N16ID'
        },
        n17Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N17ID'
        },
        n18Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N18ID'
        },
        n19Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N19ID'
        },
        n20Id: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'N20ID'
        },
        shortSalObjectName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ShortSalObjectName'
        },
        shortSalObjectNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'ShortSalObjectNameU'
        },
        dutyId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DutyID'
        },
        validDateMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ValidDateMode'
        },
        monthContractNum: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'MonthContractNum'
        },
        dateEndSalObjectId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DateEndSalObjectID'
        },
        maintainedMonthNum: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'MaintainedMonthNum'
        },
        nextSalaryObjectId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'NextSalaryObjectID'
        },
        isCheckContract: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsCheckContract'
        }
    }, {
        tableName: 'D13T1020'
    });
};
