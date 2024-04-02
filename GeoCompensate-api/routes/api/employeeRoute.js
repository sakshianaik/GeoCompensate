var express = require('express');
// const isAuthenticated = require('../../middleware/authMiddleware');
const EmployeeController = require('../../controllers/employee/employeeController');
var router = express.Router();

router.post('/register', EmployeeController.registerEmployee);
router.get('/:searchQuery', EmployeeController.fetchEmployees);

module.exports = router;