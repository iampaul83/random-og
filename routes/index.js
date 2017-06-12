var express = require('express');
var router = express.Router();

const titles = [
  '牛肉麵',
  '牛排',
  '定時8'
]

/* GET home page. */
router.get('/', function(req, res, next) {
  const r = titles[Math.floor(Math.random()*10)%3]
  res.render('index', { title: r });
});

module.exports = router;
