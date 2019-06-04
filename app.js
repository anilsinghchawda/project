var express = require("express");
var app = express();
var routes = require("./config/routes");

var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache");
var upload = require("express-fileupload");
var random = require("randomstring");



app.use(bodyParser());
app.use(cookieParser());
app.use(session({ secret : "anil"}));
app.use(cache());
app.use(flash());
app.use(upload());



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));




app.use(routes);

var port = process.env.PORT || 3000;
app.listen(port, function(){
	console.log("Server is Active at Port", port);
});