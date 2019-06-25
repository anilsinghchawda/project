var express = require("express");
var routes = express.Router();
var product = require("../models/product");
var mongo  = require("mongodb");
var upload = require("express-fileupload");
var random = require("randomstring");
var flash = require("flash");
var path = require("path");

// routes.get("/", function(req, res){
// 	product.find({}, function(err, result){
// 		console.log(result);
// 		res.send(result);
// 	})
// });
routes.post("/", function(req, res){
	if(req.body._id){
		var id = new mongo.ObjectId(req.body._id);
		console.log(id);
		product.remove({_id : id}, function(err, result){
			res.send(result);
		})
	}else{
	console.log("product added controllers say", req.body);
	var fileObj = req.files.image;
	var name = fileObj.name;
	var size = fileObj.size;

	var arr = name.split(".");
	var n = arr.length;
	var ext = arr[n-1];

	if (ext == "jpg" || ext == "jpeg" || ext == "png" || ext == "gif" || ext == "bmp"){
		if(size <= 1024*1024){
			var rand_string = random.generate(21);

			var newname = rand_string + "." + ext;
			fileObj.mv(path.resolve()+ "/public/product/" + newname, function(err){
				req.body.price=parseInt(req.body.price);
				req.body.discount=parseInt(req.body.discount);
				res.redirect("/admin/addproduct");
			})
		}else{
			req.flash("msg", "File size is too long...")
		}
	}else{
		req.flash("msg", "This type of file is not supported try jpg, jpeg, png, gif..")
	}
	product.insert(req.body, function(err, result){
		res.send(result.ops[0]);

	})
}
});
module.exports=routes;