var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res){
	var pagedata = { title : "HOME", pagename : "home"}
	res.render("layout", pagedata);
	// res.render("layout");
});

module.exports=routes;