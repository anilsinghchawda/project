var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var mongo  = require("mongodb");

routes.get("/", function(req, res){
	var obj = {
		name : "Anil",
		age : 21
	};
	console.log("/ get sending obj", obj);
	res.send(obj);
});

routes.post("/", function(req, res){
	console.log("login Recieving", req.body);
	user.insert(req.body, function(err, result){
		res.send(result);
	})
	
});
module.exports=routes;