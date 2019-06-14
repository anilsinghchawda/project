var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/login"));


module.exports=routes;