const router = require("express").Router();

router.use("/login", require("./loginRoute"));

module.exports = router;