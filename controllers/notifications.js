var mongoose = require('../utils/connectmongo');
const Notification = require('../models/notifications');



exports.getAllNotifications = function(req, res) {
    console.log(req.query.uuid);
    Notification.find({"user":req.query.uuid}).populate('creator').populate('receiver').populate('likes').populate('dislikes').exec(function (err, notifications) {
        console.log(notifications)
        res.json(notifications);
    });
};

exports.getNewNotifications = function(req, res) {
    Notification.find({"uuid":req.query.uuid, "seen":false}).populate('creator').populate('receiver').populate('likes').populate('dislikes').exec(function (err, notifications) {
        console.log(notifications)
        res.json(notifications);
    });
};
