var express = require('express');
// const isAuthenticated = require('../../middleware/authMiddleware');
const EmployeeController = require('../../controllers/employee/employeeController');
var router = express.Router();

router.post('/register', EmployeeController.registerEmployee);

module.exports = router;