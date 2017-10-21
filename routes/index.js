var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET socket page. */
router.get('/s', function(req, res, next) {
    res.render('index',{title:'技术讨论区'});
});
/* GET socket page. */
router.get('/w', function(req, res, next) {
    res.render('index2',{title:'技术讨论区'});
});



module.exports = router;
