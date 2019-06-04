var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){
		var db = client.db("project");
		db.collection("admin_table").find(where).toArray(cb);
	});
}
module.exports.insert=function(what, cb){
	connect(function(err, client){
		var db = client.db("project");
		db.collection("admin_table").insert(what, cb);
	});
}