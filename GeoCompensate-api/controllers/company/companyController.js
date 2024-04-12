const { addCompany, getCompany } = require("../../services/company/companyService");

class CompanyController {
    static async addCompany(req, res) {
        try {
            const payload= req.body;
            let company = await addCompany(payload);
            company.save();
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: company,
            });
        } catch (error) {
            return res.status(500).json({
                type: "error",
                message: error.message || "Unhandled Error",
                error,
            });
        }
    }

    static async fetchCompanyLocation(req, res) {
        try {
            const companyId= req.params.companyId;
            let company = await getCompany(companyId);
            return res.status(200).json({
                type: "success",
                message: "Success result",
                data: company,
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
module.exports = CompanyController;