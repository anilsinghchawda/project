var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();

});

app.use(routes);
app.use(bodyParser());

var port = process.env.PORT || 3000;
app.listen(3000, function(){
	console.log("Server Running for uang on port", port);
});