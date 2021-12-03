var mongoose = require('../utils/connectmongo');
const User = require('../models/user');
const md5 = require('md5');
var express = require('express')
const Redis = require("ioredis");
const redis = new Redis();
const { uuid } = require('uuidv4');


exports.login = function (req, res) {
    var encrypted = md5(req.query.password);

    User.findOne({ email: req.query.email, password: encrypted }, function (err, user) {
        if (user != null) {
            var uuidg = uuid();
            redis.set(req.query.email, uuidg, 'ex', 60);
            user.login = true;
            user.lastToken = uuidg;
            console.log(user)
            res.json(user);
        } else {
            user = {};
            user.login = false
            res.status(403);
            res.json(user);
        }

    });

};

exports.checkLogin = function (req, res) {

    var email = req.query.email;
    console.log(email)
    redis.get(email, function (err, token) {
        console.log("MON TOKEN", token)
        if (token == null) {
            user = {};
            user.login = false
            res.status(403);
            res.json(user);
        } else {
            user = {};
            user.login = true
            res.status(200);
            res.json(user);
        }
    })

}