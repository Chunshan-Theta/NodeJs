console.log("Get MySQL connection");





var mysql = require('mysql');





module.exports = function (db){
    /*
    // connect to MySQL
    // need lib : require('mysql')
    // using :
        sql = require('./MysqlSet.js');
        connection = new sql('argument');
        connection.query("SELECT * FROM `QuestionDoc`",function(returnValue) {      
            this.QuestionDoc = returnValue;
        })
    // coding: gavin
    */

    var host = "localhost";
    var user = "root";
    var password =  "root";

    var connection = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: db
    });
    connection.connect();
    this.query = function(Sql,callback){
        connection.query(Sql, function (err, result, fields) {
            if (err) throw err;
            callback(result);
        });    
    }
    this.close = function(){
        connection.end();
    };    
    

}

/*
var con = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: DB
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM `QuestionDoc`", function (err, result, fields) {
    if (err) throw err;
    console.log(result[0]['QuestionContent']);
  });
});


result =
[ RowDataPacket { QuestionId: 1, QuestionContent: 'Question test 1' },
  RowDataPacket { QuestionId: 2, QuestionContent: 'Question test 2' } ]

result[0] =
RowDataPacket { QuestionId: 1, QuestionContent: 'Question test 1' }

result[0]['Question test 1'] =
Question test 1

*/


/*
exports.do_a = function(){
  // do something ...
};
*/

