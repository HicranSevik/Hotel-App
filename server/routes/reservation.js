const mongoose = require('mongoose');

var express = require('express');
var router = express.Router();

var reservation = require('../models/Reservations');

/* GET home page. */

router.post('/', function (req, res, next) {
    console.log("Hello");
    reservation.create(req.body)
        .then((data) => {

            res.status(201).json({
                "statusCode": 201,
                "statusMessage": "Db ye kaydedildi.",
                "data": data
            })
        }).catch((err) => {
            console.log(err);
        })

    reservation.collection.insertOne(req.body)
        .then((data) => {
            res.status(201).json({
                "statusCode": 201,
                "statusMessage": "Ekleme işlemi başarılı",
                "data": data
            })
        }).catch((err) => {
            console.log(err);
        })

})

router.get('/', function (req, res, next) {
    reservation.find({})
        .then((data) => {
            res.status(201).json({
                "statusCode": 201,
                "statusMessage": "Listeleniyor.",
                "data": data
            })
        })
        .catch((err) => {
            console.log(err);
        })
})

router.delete('/', function (req, res, next) {
    reservation.find({})
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

// router.get('/search', function (req, res, next) {
//     hotel.find({ req.boy.hotel_location = 'ankara' })
//         .then((data) => {
//             // res.status(201).json({
//             //     "statusCode": 201,
//             //     "statusMessage": "Listeleniyor.",
//             //     "data": data
//             // })
//             {
//                 d
//             }

//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })



// data göndereceksek post, isteyeceksek get.

module.exports = router;