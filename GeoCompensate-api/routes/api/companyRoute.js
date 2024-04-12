var express = require('express');
// const isAuthenticated = require('../../middleware/authMiddleware');
const CompanyController = require('../../controllers/company/companyController');
var router = express.Router();

router.post('/', CompanyController.addCompany);
router.get('/:companyId', CompanyController.fetchCompanyLocation);
module.exports = router;