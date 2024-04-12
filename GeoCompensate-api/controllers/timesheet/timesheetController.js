const { checkClockedIn, clockIn } = require("../../services/timesheet/timesheetService");
const { CLOCK_TYPE } = require("../../utils/enums");

class TimesheetController {
    static async checkTodayClockIn(req, res) {
        try {
            const payload = req.body;
            const data = {
                employeeId: payload.empId,
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
                employeeId: payload.empId,
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
                employeeId: payload.empId,
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
}
module.exports = TimesheetController;