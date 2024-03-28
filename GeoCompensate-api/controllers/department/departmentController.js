const { getDepartments } = require("../../services/department/departmentService");

class DepartmentController {
    static async fetchAllDepartments(req, res) {
        try {
            const companyId = req.params.companyId;
            let departments = await getDepartments(companyId);
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: departments,
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
module.exports = DepartmentController;