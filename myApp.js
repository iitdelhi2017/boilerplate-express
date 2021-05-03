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

app.get("/",sendfile);




































 module.exports = app;
