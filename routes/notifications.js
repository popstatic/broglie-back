var express = require('express');
var notificationController = require("../controllers/notifications")
var router = express.Router();



/* GET /users listing. */
router.get('/getAllNotifications', notificationController.getAllNotifications) 
router.get('/getNewNotifications', notificationController.getNewNotifications) 

module.exports = router;