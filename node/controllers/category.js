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
	if(req.body._id){
		category.remove({_id : mongo.ObjectId(req.body._id)}, function(err, result){
		console.log(mongo.ObjectId(req.body._id));
			res.send(result);
		})
	}else{
	console.log("Category added controllers say", req.body);
	category.insert(req.body, function(err, result){
		res.send(result.ops[0]);
	})
}
});
module.exports=routes;