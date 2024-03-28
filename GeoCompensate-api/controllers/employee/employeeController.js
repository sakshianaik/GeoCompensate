const { getEmployeeId, saveEmployee } = require("../../services/employee/employeeService");

class EmployeeController {
    static async registerEmployee(req, res) {
        try {
            const payload = req.body;
            let id = await getEmployeeId();
            id.employeeId = (id && id.employeeId ? id.employeeId : 0 )+ 1;
            id.save();
            payload.employeeId = id.employeeId;
            payload.password = Math.random().toString(36).slice(2);
            let emp = await saveEmployee(payload);
            emp.save();
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: emp,
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
module.exports = EmployeeController;