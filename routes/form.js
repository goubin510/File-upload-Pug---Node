var express = require('express');
var router = express.Router();
var util = require('util');
var formidable = require('formidable');


router.get('/', function(req, res, next) {
  res.render('form', { title: 'Form' });
});

router.post('/', function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = "/Users/antoinegoubin/Private/freeCodeCamp/api/fileMeta/public/uploads";
  
  form.parse(req, function(err, fields, files) {
    var json = {};
    json.size = files.file.size;
    
    res.send(json);
  });
});

module.exports = router;