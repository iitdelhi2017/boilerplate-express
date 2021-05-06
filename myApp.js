var express = require('express');
var app = express();
var bodyParser=require('body-parser');
console.log("Hello World");
/*
var greet=function(req,res){
  res.send("Hello Express");
};

var sendfile=function(req,res){
  abs_path=__dirname+"/views/index.html";
  res.sendFile(abs_path);
};
//app.get("/",greet);

var css_asset=express.static(__dirname+"/public");
app.use("/public",css_asset);

//app.get("/",sendfile);
*/
/*
var logger=function(req,res,next){
  console.log(req.method,req.path,'-',req.ip);
  //res.send("Hello world");
  next();
};

app.use(logger);*/
/*
var json_handler=function(req,res){
  var data={"message": "Hello json"};
  if(process.env['MESSAGE_STYLE']=="uppercase"){
    data.message=data.message.toUpperCase();
  };

  res.json(data);
};

//app.get("/json",json_handler);

*/

/*
app.get('/now',function(req,res,next){
  req.time=new Date().toString();
  next();
},
  function(req,res){
    res.json({'time': req.time});
  });*/
/*
var echo=function(req,res){
  var data={'echo': req.params.word.toString()};
  res.json(data);
};

  app.get('/:word/echo',echo);*/

  app.use(bodyParser.urlencoded({extended:false}));

  var name=function(req,res){
    console.log(req.body);
    var data={'name': (req.body.first+' '+req.body.last).toString()};
    res.json(data);
  };

  //app.get('/name',name);
  app.post('/name',name);




 module.exports = app;
