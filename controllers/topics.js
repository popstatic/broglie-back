var mongoose = require('../utils/connectmongo');
const Topic = require('../models/topics');
const Comment = require('../models/commentsTopic');


exports.getAllTopics = function(req, res) {
    Topic.find({}).populate('creator').populate('comments').populate('likes').populate('dislikes').exec(function (err, topics) {
        console.log(topics)
        res.json(topics);
    });
};

exports.getTopicByCategory = function(req, res) {
    Topic.findOne({"uuid":req.query.uuid,"category":req.query.category}).populate('creator').populate('comments').populate('likes').populate('dislikes').exec(function (err, topic) {
        console.log(topic)
        res.json(topic);
    });
    
};


exports.getTopic = function(req, res) {
    Topic.findOne({"uuid":req.query.uuid}).populate('creator').populate('comments').populate('likes').populate('dislikes').exec(function (err, topic) {
        console.log(topic)
        res.json(topic);
    });
    
};
