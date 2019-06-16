var express = require("express");
var routes = express.Router();
var category = require("../models/category");
var mongo  = require("mongodb");
routes.get("/", function(req, res){
	category.find({}, function(err, result){
		console.log(result);
		res.send(result);
	})
});
routes.post("/", function(req, res){
	console.log("login Recieving", req.body);
	category.insert(req.body, function(err, result){
		res.send("SignUp Successfully", result);
	})
});
module.exports=routes;