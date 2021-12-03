var express = require('express');
var authController = require("../controllers/auth")
var router = express.Router();

/* GET /auth listing. */

router.get('/login', authController.login)
router.get('/checkLogin', authController.checkLogin)


module.exports = router;