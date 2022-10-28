const documents = require('../models/image.model.js');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
var multer = require('multer');
const { uniqueId } = require('lodash');
//const DateTime = require('node-datetime/src/datetime');
// const sgMail = require('@sendgrid/mail')



var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'images');
    },
    filename: function (req, file, callback) {
        if(file.mimetype == 'image/png'){
            var type = 'png'
        }else if(file.mimetype == 'image/pdf'){
            var type = 'pdf'
        }else if(file.mimetype == 'image/jpg'){
            var type = 'jpg'
        }else{
            var type = ''
        }
        var image = uniqueId()+Date.now()+"."+type
        

        callback(null, image);
    }
});

module.exports.documents = async (req, res, next) => {
    var upload = multer({ storage: storage }).single('file');

    upload(req, res, async function (err) {

        if (err) {
            console.log(err);
            return res.send(["Error uploading file.", err]);
        }
        try {
            console.log("---------");

            const _id = req.params.key;
            req.body.file = req.headers.host + "/" + req.file.path;
            console.log("file upload---", req.body.file);
            const addingTruckRecords = new documents({
                file: req.body.file
            });

            const resp = await addingTruckRecords.save();
            const insertTruck = resp;
            res.json({
                status: true,
                msg: "Ducuments upload successfully..",
                response_data: insertTruck,
            })
        } catch (err) {
            console.log(err);
            res.status(500).send({
                message: `Could not upload the file: ${req.file.originalname}. ${err}`,
            });
        }

    });
}


// file upload function
module.exports.uploadImg = async (req, res, next) => {
    console.log('lllllllllllllll');
    upload(req, res, function (err) {
        console.log(req);
        if (err) {
            console.log(err);
            return res.end("Error uploading file.");
        }
        res.json({
            status: true,
            msg: "file Upload successfully..",
            // response_data: addingSplashRecords,
        })
    });

    // });

}