var express = require("express");
var routes = express.Router();
var users = require("../models/users");

routes.post("/", function(req, res){
	console.log(req.body);
	users.insert(req.body, function(err, result){
		res.redirect("/");
	})
	// users.insert{req.body,}

})

module.exports=routes;