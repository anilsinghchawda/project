var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/login"), function(req, res){
	console.log("Node is routing the login URL");
});


module.exports=routes;