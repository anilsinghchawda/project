var express = require("express");
var routes = express.Router();


routes.get("/", function(req, res){
	var pagedata = { title : "Sold Your Crop", pagename : "sold"}
	res.render("layout", pagedata);
});


module.exports=routes;