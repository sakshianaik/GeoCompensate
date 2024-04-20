const { checkClockedIn, clockIn, getEmpTimesheet } = require("../../services/timesheet/timesheetService");
const { CLOCK_TYPE } = require("../../utils/enums");

class TimesheetController {
    static async checkTodayClockIn(req, res) {
        try {
            const payload = req.body;
            const data = {
                employeeId: payload.employeeId,
                date: payload.date,
                clockedOut: false
            }
            const response = await checkClockedIn(data);
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: response,
            });
        } catch (error) {
            return res.status(500).json({
                type: "error",
                message: error.message || "Unhandled Error",
                error,
            });
        }
    }

    static async clockIn(req, res) {
        try {
            const payload = req.body;
            const data = {
                employeeId: payload.employeeId,
                date: payload.date,
                clockIn: payload.clockIn,
                clockOut: payload.clockOut,
                type: CLOCK_TYPE.WORK_START,
                clockedOut: false,
                clockedLocation: payload.clockedLocation
            }
            const timesheet = await clockIn(data);
            timesheet.save();
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: timesheet,
            });
        } catch (error) {
            return res.status(500).json({
                type: "error",
                message: error.message || "Unhandled Error",
                error,
            });
        }
    }

    static async clockOut(req, res) {
        try {
            const payload = req.body;
            const data = {
                employeeId: payload.employeeId,
                date: payload.date,
                clockedOut: false
            }
            const response = await checkClockedIn(data);
            response.clockedOut = true;
            response.clockOut = payload.clockOut;
            response.save();
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: response,
            });
        } catch (error) {
            return res.status(500).json({
                type: "error",
                message: error.message || "Unhandled Error",
                error,
            });
        }
    }

    static async pingLocation(req, res) {
        try {
            const payload = req.body;
            const data = {
                employeeId: payload.employeeId,
                date: payload.date,
                clockedOut: false
            }
            const response = await checkClockedIn(data);
            response.clockOut = payload.clockOut;
            response.save();
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: response,
            });
        } catch (error) {
            return res.status(500).json({
                type: "error",
                message: error.message || "Unhandled Error",
                error,
            });
        }
    }

    static async fetchEmpTimesheet(req,res){
        try {
            const employeeId = req.params.empId;
            let timesheet = await getEmpTimesheet({employeeId});
            return res.status(200).json({
                type: "success",
                message: "Success result of timesheet",
                data: timesheet,
            });
        } catch (error) {
            return res.status(500).json({
                type: "error",
                message: error.message || "Unhandled Error",
                error,
            });
        }
    }
}

module.exports = TimesheetController;