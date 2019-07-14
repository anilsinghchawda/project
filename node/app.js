var express = require("express");
var app = express();
var routes = require("./config/routes");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
var upload = require("express-fileupload");
var fileUpload  = require("file-upload");
var random = require("randomstring");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(routes);
app.use(express.static(__dirname +"/public/"));
app.use(bodyParser()); 
app.use(cookieParser());
app.use(session({ secret : "anil"}));
app.use(cache());
app.use(flash());
app.use(upload());

var port = process.env.PORT || 3000;
app.listen(3000, function(){
	console.log("Server Running for uang on port", port);
});
