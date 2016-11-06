var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express! - via (actual) 3 local Build' });
});

module.exports = router;
