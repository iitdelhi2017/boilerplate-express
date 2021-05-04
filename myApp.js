var express = require('express');
var app = express();
console.log("Hello World");

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

var json_handler=function(req,res){
  var data={"message": "Hello json"};
  res.json(data);
};

app.get("/json",json_handler);




































 module.exports = app;
