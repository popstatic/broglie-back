var express = require('express');
var topicController = require("../controllers/topics")
var router = express.Router();



/* GET /users listing. */
router.get('/getAllTopics', topicController.getAllTopics) 
router.get('/getTopic', topicController.getTopic) 

module.exports = router;