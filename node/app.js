var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var routes = require("./config/routes");

app.use(routes);
app.use(bodyParser());


var port = process.env.PORT || 3000;
app.listen(3000, function(){
	console.log("Server Running for uang on port", port);
});