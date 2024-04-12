const router = require("express").Router();

router.use("/login", require("./loginRoute"));
router.use("/employee", require("./employeeRoute"));
router.use("/department", require("./departmentRoute"));
router.use("/timesheet",require("./timesheetRoute"));
router.use("/company",require("./companyRoute"));

module.exports = router;