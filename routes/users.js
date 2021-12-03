var express = require('express');
var userController = require("../controllers/users")
var router = express.Router();

var app = express();

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if ('OPTIONS' == req.method) {
    res.sendStatus(200);
    } else {
      next();
    }
  });

/* GET /users listing. */
router.get('/getAllUsers', userController.getAllUsers) 
router.get('/getUser', userController.getUser) 

module.exports = router;
