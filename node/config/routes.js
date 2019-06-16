var express = require("express");
var routes = express.Router();


routes.use("/", require("../controllers/login"));
routes.use("/category", require("../controllers/category"));


module.exports=routes;