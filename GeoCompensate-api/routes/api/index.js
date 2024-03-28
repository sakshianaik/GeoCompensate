const router = require("express").Router();

router.use("/login", require("./loginRoute"));
router.use("/employee", require("./employeeRoute"));
router.use("/department", require("./departmentRoute"));

module.exports = router;