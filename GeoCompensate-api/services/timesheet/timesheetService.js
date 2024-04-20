const { Timesheet } = require("../../models");

exports.checkClockedIn = (data) => {
    let result;
    try {
        let matchQuery = {
            employeeId: data.empId,
            date: data.date,
            clockedOut: data.clockedOut
        };
        result = Timesheet.findOne(matchQuery).lean();
    } catch (error) {
        return Promise.reject(error);
    }
    return result;
}

exports.clockIn = (data) => {
    let result;
    try {
        result = new Timesheet(data);
    } catch (error) {
        return Promise.reject(error);
    }
    return result;
}

exports.getTimesheet = (data) => {
    let result;
    try {
        const pipeline = [
            {
                $match: {
                    employeeId: data.employeeId,
                    clockedOut: true,
                    date: { $gte: data.startOfMonth, $lte: data.endOfMonth}
                }
            },
            {
                $addFields: {
                    totalHours: { $divide: [{ $subtract: ["$clockOut", "$clockIn"] }, 1000 * 60 * 60] }
                }
            },
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                    totalHours: { $sum: "$totalHours" },
                    totalPay: { $sum: { $multiply: ["$totalHours", "$hourlyPay"] } },
                    rows: { $push: "$$ROOT" }
                }
            },
            {
                $project: {
                    _id: 0,
                    date: "$_id",
                    totalHours: 1,
                    totalPay: 1,
                    rows: 1
                }
            }
        ];
        result = Timesheet.aggregate(pipeline);

    } catch (error) {
        return Promise.reject(error);
    }
    return result;
}