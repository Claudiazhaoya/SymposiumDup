var express = require('express');
var course = require('../model/course');
var router = express.Router();
var AWS = require('aws-sdk'),
    fs = require('fs');

AWS.config.update({ accessKeyId: 'AKIAJAHIZDYM26AX3HWA', secretAccessKey: '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' });

router.get('/groupstudy', function(req, res, next) {
    console.log('test');
    res.render('groupstudy');
});

router.post('/groupstudy', function(req, res, next) {
    console.log('submit?');
    // Read the file, convert to base64, and store to S3
    fs.readFile(req.body.studyNotes, function(err, data)) {
        if (err) { throw err; }

        var base64data = new Buffer(data, 'binary');
        var s3 = new AWS.S3();

        s3.upload({
            Bucket: 'cs307symposium',
            Key: req.body.studyNotes,
            Body: base64data,
            ACL: 'public-read'
        }, function (res2) {
            // Check if the file is uploaded
            console.log(arguments);
            console.log('The file has been successfully uploaded');
            return res.redirect('/index');
        })
    }
})