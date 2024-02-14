var express = require('express');
// const isAuthenticated = require('../../middleware/authMiddleware');
const LoginController = require('../../controllers/login/loginController');
var router = express.Router();

router.post('/', LoginController.login);

module.exports = router;