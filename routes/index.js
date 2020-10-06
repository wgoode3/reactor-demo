var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(path.join(__dirname, "../products.json"), function(err, data) {
    res.render('index', { title: 'Demo', products: JSON.parse(data) });
  });
});

module.exports = router;
