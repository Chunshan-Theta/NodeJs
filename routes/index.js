var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

/* GET socket page. */
router.get('/s', function(req, res) {
    var ID = req.param('create', null)
    var ip = req.connection.remoteAddress;
    if(ID==null){
       ID = req.param('add', null)
    }
    else{     
       ID = ID+ip
    }
    
    console.log('ip:'+ip)
    res.render('index',{title:'聊天室：',room:ID});
});


module.exports = router;
