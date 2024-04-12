const { Company } = require("../../models");

exports.addCompany = (data) => {
    let result;
    try {
        result = new Company(data);
    } catch (error) {
        return Promise.reject(error);
    }
    return result;
}

exports.getCompany = (companyId) => {
    let result;
    try {
        let matchQuery = {
            _id: companyId
        };
        result = Company.findOne(matchQuery).lean();
    } catch (error) {
        return Promise.reject(error);
    }
    return result;
}