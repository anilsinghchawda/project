var connect = require("../config/connect");

module.exports.insert=function(obj, cb){
	connect(function(err, client){
		client.db("project").collection("category").insert(obj, cb);
	})
}
module.exports.find=function(obj, cb){
	connect(function(err, client){
		client.db("project").collection("category").find(obj).toArray(cb);
	})
}