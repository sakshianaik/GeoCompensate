const { checkCredentials } = require("../../services/employee/employeeService");
const jwt = require("jsonwebtoken");


class LoginController {
    static async login(req, res) {
        try {
            let access_token = null;
            const payload = req.body;
            let emp = await checkCredentials(payload);
            if(emp){
                delete emp.password
                delete emp.createdDate
                delete emp.modifiedDate
                delete emp.hourlyPay
                access_token = jwt.sign(emp, process.env.JWT_SECRET, { expiresIn: "2h" })
                emp['access_token'] = access_token
            }

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
module.exports = LoginController;