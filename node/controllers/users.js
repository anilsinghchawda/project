var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var bodyParser = require("body-parser");
routes.use(bodyParser());

routes.get("/", function(req, res){
	user.find({}, function(err, result){
		console.log(result);
		res.send(result);
})
});
routes.post("/", function(req, res){
	console.log("Login controller Recieving", req.body);
	user.insert(req.body, function(err, result){
		console.log(result);
		res.send(result);
	})
});
module.exports=routes;