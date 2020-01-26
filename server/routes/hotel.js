const mongoose = require('mongoose');

var express = require('express');
var router = express.Router();

var hotel = require('../models/Hotel');

/* GET home page. */

router.post('/', function (req, res, next) {
    console.log("Hello");
    hotel.create(req.body)
        .then((data) => {

            res.status(201).json({
                "statusCode": 201,
                "statusMessage": "Db ye kaydedildi.",
                "data": data
            })
        }).catch((err) => {
            console.log(err);
        })

    // hotel.collection.insertOne(req.body)
    //     .then((data) => {
    //         res.status(201).json({
    //             "statusCode": 201,
    //             "statusMessage": "Ekleme işlemi başarılı",
    //             "data": data
    //         })
    //     }).catch((err) => {
    //         console.log(err);
    //     })

})

router.post('/list', function (req, res, next) {
    console.log("HOTEL CITY : " + req.body.hotel_city);
    hotel.find({ hotel_city: req.body.hotel_city })
        .then((data) => {

            res.status(201).json({
                "statusCode": 201,
                "statusMessage": "Listeleniyor.",
                "data": data
            })
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
})

router.delete('/', function (req, res, next) {
    hotel.find({})
        .then((data) => {
            if (req.param.data.hotel_name == "hicran")
                res.status(201).json({
                    "statusCode": 201,
                    "statusMessage": "Silindi.",
                    "data": data
                })
        })
        .catch((err) => {
            console.log(err);
        })
})

module.exports = router;