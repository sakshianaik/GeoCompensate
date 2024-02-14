const { Employee } = require("../../models");


exports.checkCredentials = (data) => {
    let result;
    try {
        let matchQuery = {
            employeeId: data.empId,
            password: data.password
        };
        result = Employee.findOne(matchQuery).lean();
    } catch (error) {
        return Promise.reject(error);
    }
    return result;
}
