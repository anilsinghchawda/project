var connect = require("../config/connect");

module.exports.find=function(where, cb){
	connect(function(err, client){
			var db = client.db("project");
			db.collection("product").find(where).toArray(cb);
		
	});
}

module.exports.insert=function(obj, cb){
	connect(function(err, client){
			var db = client.db("project");
			db.collection("product").insert(obj, cb);
});
}

module.exports.remove=function(where, cb){
	connect(function(err, client){
		var db = client.db("project");
		db.collection("product").remove(where, cb);
	});
}