var express = require("express");
// const isAuthenticated = require('../../middleware/authMiddleware');
const EmployeeController = require("../../controllers/employee/employeeController");
var router = express.Router();

router.post("/register", EmployeeController.registerEmployee);
router.get("/:searchQuery", EmployeeController.fetchEmployees);
router.get("/profile/:empId", EmployeeController.fetchEmpProfile);
router.delete("/profile/:empId", EmployeeController.relieveEmployee);
router.put("/profile", EmployeeController.updateEmpProfile);

module.exports = router;
