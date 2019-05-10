var connect = require("../config/connect");

module.exports.insert=function(where, cb){
	connect(function(err, client){
	var db = client.db("project");
	db.collection("users").insert(where, cb)
	});
}