var mongoose = require('../utils/connectmongo');
const User = require('../models/user');


exports.getAllUsers = function(req, res) {
    User.find({}, function (err, users) {
        console.log(users)
        users.status=true
        res.json(users);
    });
    
};

exports.getUser = function(req, res) {
    User.findOne({"uuid":req.query.uuid}, function (err, user) {
        console.log(user)
        res.json(user);
    });
    
};