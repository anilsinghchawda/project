var express = require("express");
var routes = express.Router();
var user = require("../models/user");
var mongo  = require("mongodb");
var bodyParser = require("body-parser");

routes.use(bodyParser());

routes.get("/", function(req, res){
	var obj = {
		name : "Anil",
		age : 21
	};
	console.log("/ get sending obj", obj);
	res.send(obj);
});
routes.post("/", function(err, result){
	console.log(req.body);
	user.find(req.body.contact, function(){
	if(result==1){
		
	}else{
		
	}

	})
});

module.exports=routes;