const mongoose = require('mongoose');
const User = require('../models/User');

var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    User.findOne({ email: req.body.email, password: req.body.password })
        .then((data) => {
            console.log(data);
            if (data) {
                res.send(true);
            }
            else {
                res.send(false);
            }
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;