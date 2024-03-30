const { Employee, EmployeeId } = require("../../models");


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

exports.getEmployeeId = () => {
    let result;
    try {
        result = EmployeeId.findOne({});
    } catch (error) {
        return Promise.reject(error);
    }
    return result;
}

exports.saveEmployee = (data) => {
    let result;
    try {
        result = new Employee(data);
    } catch (error) {
        return Promise.reject(error);
    }
    return result;
}
