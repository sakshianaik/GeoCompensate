const department = require("../../models/departmentModels/department");

exports.getDepartments = async (companyId) => {
    let result;
    try {
        let matchQuery = {
            companyId: companyId
        };
        result = await department.find(matchQuery)
    } catch (error) {
        return Promise.reject(error);
    }
    return result;
}