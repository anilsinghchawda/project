var express = require("express");
var routes = express.Router();

routes.get("/", function(req, res){
	var pagedata = { title : "KCC", pagename : "kcc"}
	res.render("layout", pagedata);
});


module.exports=routes;