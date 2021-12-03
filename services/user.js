
var mongoose = require('../utils/connectmongo');
const User = require('../models/user');


module.exports = {
    getAllUsers: function (callback) {
        User.find({}, function (err, users) {
            console.log(users,err)
            return users;
        });
    }
}