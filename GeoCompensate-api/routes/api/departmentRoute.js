var express = require('express');
// const isAuthenticated = require('../../middleware/authMiddleware');
const DepartmentController = require('../../controllers/department/departmentController');
var router = express.Router();

router.get('/:companyId', DepartmentController.fetchAllDepartments);

module.exports = router;