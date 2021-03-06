var express = require("express")
var routes = express.Router();
var admin_table = require("../../models/admin_table");
var sha1 = require("sha1");

routes.get("/", function(req, res){
	res.render("admin/login", {message : req.flash("msg") })
});

routes.post("/" , function(req, res){
	var u = req.body.username;
	var p = req.body.password;
	admin_table.find({ username : u }, function(err, result){
	if(result.length==1){ 
		if(result[0].password==sha1(p)){
			req.session._id = result[0]._id;
			req.session.fullname = result[0].username;
			req.session.is_admin_logged_in =true;
	// console.log(req.session.fullname);
			res.redirect("/admin/addcategory");
		}else{

		req.flash("msg", "Password is Incorrect");
		res.redirect("/admin");
		}

	}else{
		req.flash("msg", "Username and Password are Incorrect");
		res.redirect("/admin");
	}

});
});

module.exports=routes;


