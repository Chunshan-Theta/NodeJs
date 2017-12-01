var express = require('express');
var router = express.Router();





/* GET home page. */
router.get('/', function(req, res) {
    res.render('index',{});
});

/* GET EntranceForChat page. */
router.get('/EntranceForChat', function(req, res) {
    res.render('EntranceForChat',{});
});

/* GET ChatRoom page. */
router.post('/Chat', function(req, res) {
    var user = req.param('user', null);
    var ID = req.param('create', null);
    var ip = req.connection.remoteAddress.substring(7);
    console.log('ip:'+ip);

    if(ID==null){
       ID = req.param('add', null);
       console.log('"'+ip+'" '+'add chat: '+ID);
    }
    else{            
       ID = ID+'-'+ip;
       console.log('"'+ip+'" '+'Create chat: '+ID);
    }

    if(user==null){       
       user = "anonymous"+' ~ xxxx.xxx...'+ip.substring(7);
       console.log('"'+ip+'" '+'Set anonymous UserName: '+user) ;
    }
    else{
       user=user+' ~ '+ip;
       console.log('"'+ip+'" '+'Set UserName: '+user);
    }
    
    res.render('ChatroomPage',{title:'聊天室代號：',room:ID,UserName:user});
});





/* GET argument page. */
router.get('/argument', function(req, res) {

    this.QuestionDoc = null;  
    this.ActionDoc = null;  

	var sql = require('./Model/MysqlSet.js');
    connection = new sql('argument');
    connection.query("SELECT * FROM `QuestionDoc`",function(returnValue) {      
        this.QuestionDoc = returnValue;
    });
    
    connection.query("SELECT * FROM `ActionDoc`",function(returnValue) {
        this.ActionDoc = returnValue;
        connection.close();


        console.log(this.QuestionDoc);
        console.log(this.ActionDoc);
        var user = '123'//req.param('user', null);
        var ID = '123'//req.param('create', null);
        var ip =  req.connection.remoteAddress.substring(7);
        console.log('ip:'+ip);
        console.log('"'+ip+'" '+'Create chat: '+ID);
        
        res.render('argument/ChatroomPage',{title:'聊天室代號：',room:ID,UserName:user});
    });
});




module.exports = router;
