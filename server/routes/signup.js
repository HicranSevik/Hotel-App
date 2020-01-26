const mongoose = require('mongoose');
const User = require('../models/User');

var express = require('express');
var router = express.Router();


router.post('/', function (req, res, next) {
    console.log(req.body);

    User.find({ email: req.body.email })
        .then((data) => {
            console.log(data);

            if (data.length > 0) {
                console.log("Email Sonucu :", data[0].email);
                console.log("Email kayıtlı");
                res.send("Email kayıtlı")
            }
            else {
                console.log("Email kayıtlı değil");
                User.create(req.body)
                    .then((data) => {

                        res.json({
                            "statusCode": 201,
                            "statusMessage": "Db ye kaydedildi.",
                            "data": data
                        })
                    }).catch((err) => {
                        console.log(err);
                    })
            }
        })
        .catch((err) => {
            console.log(err);
        })

})

router.get('/', function (req, res, next) {
    User.find({ email: req.body.email })
        .then((data) => {

            res.status(201).json({
                "statusCode": 201,
                "statusMessage": "Listeleniyor.",
                "data": data
            })
            data
            console.log("HEY data:");
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;