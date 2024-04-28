const { Employee, EmployeeId } = require("../../models");
exports.checkCredentials = (data) => {
  let result;
  try {
    let matchQuery = {
      employeeId: data.empId,
      password: data.password,
    };
    result = Employee.findOne(matchQuery).lean();
  } catch (error) {
    return Promise.reject(error);
  }
  return result;
};

exports.getEmployeeId = () => {
  let result;
  try {
    result = EmployeeId.findOne({});
  } catch (error) {
    return Promise.reject(error);
  }
  return result;
};

exports.saveEmployee = (data) => {
  let result;
  try {
    result = new Employee(data);
  } catch (error) {
    return Promise.reject(error);
  }
  return result;
};

exports.getEmployees = (searchQuery) => {
  let result;
  try {
    let matchQuery = {
      name: { $regex: "^" + searchQuery, $options: "i" },
    };
    result = Employee.find(matchQuery).lean();
  } catch (error) {
    return Promise.reject(error);
  }
  return result;
};

exports.getOneEmpData = (empId) => {
  let result;
  try {
    let matchQuery = {
      employeeId: empId,
    };
    result = Employee.findOne(matchQuery);
  } catch (error) {
    return Promise.reject(error);
  }
  return result;
};

exports.deleteEmployee = (empId) => {
  let result;
  try {
    let matchQuery = {
      employeeId: empId,
    };
    result = Employee.deleteOne(matchQuery);
  } catch (err) {
    return Promise.reject(err);
  }
  return result;
};

exports.checkCurrentPassword = (data) => {
  let result;
  try {
    let matchQuery = {
      employeeId: data.employeeId,
      password: data.currentPassword
    };
    result = Employee.findOne(matchQuery);
  } catch (err) {
    return Promise.reject(err);
  }
  return result;
}
