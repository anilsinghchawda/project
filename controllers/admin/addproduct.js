var express = require("express");
var routes = express.Router();


routes.get("/", function(req, res){
	// var pagedata = { title : "Add Product", pagename : "addproduct"}
	// res.render("admin/layout", pagedata);
	res.render("addproduct");
});


module.exports=routes;