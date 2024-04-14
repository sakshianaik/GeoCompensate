const { Timesheet } = require("../../models");

exports.checkClockedIn = (data) => {
    let result;
    try {
        let matchQuery = {
            employeeId: data.empId,
            date: data.date,
            clockedOut: data.clockedOut
        };
        result = Timesheet.findOne(matchQuery);
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