/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('D15T1040', {
        leaveObjectId: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            field: 'LeaveObjectID'
        },
        leaveObjectName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'LeaveObjectName'
        },
        standLeaveQuan: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((12))',
            field: 'StandLeaveQuan'
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
            allowNull: true,
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
        leaveApplyDateMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'LeaveApplyDateMode'
        },
        ladMonth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'LADMonth'
        },
        ladDateJoinedMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'LADDateJoinedMode'
        },
        leaveValidDateMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'LeaveValidDateMode'
        },
        lvdMonth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'LVDMonth'
        },
        lvdDateJoinedMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'LVDDateJoinedMode'
        },
        limitLeave: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'LimitLeave'
        },
        limitLeaveMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'LimitLeaveMode'
        },
        isMon: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsMon'
        },
        isTue: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsTue'
        },
        isWed: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsWed'
        },
        isThu: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsThu'
        },
        isFri: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(1)',
            field: 'IsFri'
        },
        isSat: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsSat'
        },
        isSun: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsSun'
        },
        transferMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'TransferMode'
        },
        transferQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'TransferQuantity'
        },
        isEffectiveBl: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsEffectiveBL'
        },
        effectiveMonthTo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'EffectiveMonthTo'
        },
        unUsedLbMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'UnUsedLBMode'
        },
        comLeaveMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'ComLeaveMode'
        },
        comLeaveQuantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'ComLeaveQuantity'
        },
        isComLeaveBl: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'IsComLeaveBL'
        },
        comLeaveMonthTo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'ComLeaveMonthTo'
        },
        fromPeriod: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'FromPeriod'
        },
        toPeriod: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '(0)',
            field: 'ToPeriod'
        },
        monQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'MonQuantity'
        },
        tueQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'TueQuantity'
        },
        wedQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'WedQuantity'
        },
        thuQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'ThuQuantity'
        },
        friQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'FriQuantity'
        },
        satQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SatQuantity'
        },
        sunQuantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '(0)',
            field: 'SunQuantity'
        },
        isLadMonthLc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsLADMonthLC'
        },
        isLvdMonthLc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsLVDMonthLC'
        },
        leaveSeniorityMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LeaveSeniorityMode'
        },
        isAlQuota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsALQuota'
        },
        alQuota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ALQuota'
        },
        leaveObjectNameU: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LeaveObjectNameU'
        },
        valueSign: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ValueSign'
        },
        divisionId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'DivisionID'
        },
        leaveDay01From: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LeaveDay01From'
        },
        leaveDay01To: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LeaveDay01To'
        },
        leaveDay02From: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LeaveDay02From'
        },
        leaveDay02To: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LeaveDay02To'
        },
        leaveDay03From: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LeaveDay03From'
        },
        leaveDay03To: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LeaveDay03To'
        },
        maxAdvancedDay: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'MaxAdvancedDay'
        },
        isMonthlyMaxLeave: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsMonthlyMaxLeave'
        },
        monthlyMaxLeave: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'MonthlyMaxLeave'
        },
        monthlyAlMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'MonthlyALMode'
        },
        leaveCycleMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LeaveCycleMode'
        },
        monthFrom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'MonthFrom'
        },
        monthTo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'MonthTo'
        },
        isSenToCycleFrom: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsSenToCycleFrom'
        },
        senApplyDateMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SenApplyDateMode'
        },
        ladMonthLc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LADMonthLC'
        },
        lvdMonthLc: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LVDMonthLC'
        },
        salTransferMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'SALTransferMode'
        },
        isNotExceedAl: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsNotExceedAL'
        },
        transferSalQuan: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'TransferSalQuan'
        },
        isNotExceedAl1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsNotExceedAL1'
        },
        isNotExceedAl2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsNotExceedAL2'
        },
        alReIssueMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ALReIssueMode'
        },
        isLadContract: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsLADContract'
        },
        ladContractId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LADContractID'
        },
        isLvdContract: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsLVDContract'
        },
        lvdContractId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'LVDContractID'
        },
        alIssueDueDateMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ALIssueDueDateMode'
        },
        isValidDateLb: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsValidDateLB'
        },
        vdlbLeaveTimesId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'VDLBLeaveTimesID'
        },
        interruptMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'InterruptMode'
        },
        standQuan: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'StandQuan'
        },
        decimals: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Decimals'
        },
        interruptDateLeftId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'InterruptDateLeftID'
        },
        interruptDateJoinedId: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            field: 'InterruptDateJoinedID'
        },
        isVdlCycle: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsVDLCycle'
        },
        vdlCycleMonths: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'VDLCycleMonths'
        },
        vdlTransferedLbMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'VDLTransferedLBMode'
        },
        maxTransferAwl: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'MaxTransferAWL'
        },
        isEffectiveAwl: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsEffectiveAWL'
        },
        effectiveAwlMonth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'EffectiveAWLMonth'
        },
        isDefault: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsDefault'
        },
        ilDateMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ILDateMode'
        },
        isQuanPerMonth: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsQuanPerMonth'
        },
        quanPerMonth: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            defaultValue: '((0))',
            field: 'QuanPerMonth'
        },
        limitSeniorityLeave: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LimitSeniorityLeave'
        },
        beginDateSenMode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'BeginDateSenMode'
        },
        standardDate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'StandardDate'
        },
        round: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'Round'
        },
        isStandDate: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsStandDate'
        },
        isAndSenLeave: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'IsAndSenLeave'
        },
        isLeaveMonthLeft: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'IsLeaveMonthLeft'
        },
        leaveDateLeft01From: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'LeaveDateLeft01From'
        },
        leaveDateLeft01To: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'LeaveDateLeft01To'
        },
        leaveDateLeft02From: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'LeaveDateLeft02From'
        },
        leaveDateLeft02To: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'LeaveDateLeft02To'
        },
        leaveDateLeft03From: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'LeaveDateLeft03From'
        },
        leaveDateLeft03To: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: '((0))',
            field: 'LeaveDateLeft03To'
        },
        leaveMonthLeft: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'LeaveMonthLeft'
        },
        apportionType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: '((0))',
            field: 'ApportionType'
        }
    }, {
        tableName: 'D15T1040'
    });
};
