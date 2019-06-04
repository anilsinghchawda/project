var express = require("express");
var routes = express.Router();

routes.use("/", require("../controllers/home"));
routes.use("/shop", require("../controllers/shop"));
routes.use("/signup", require("../controllers/signup"));
routes.use("/login", require("../controllers/login"));
routes.use("/sold", require("../controllers/sold"));
routes.use("/seminars", require("../controllers/seminars"));
routes.use("/contact", require("../controllers/contact"));
routes.use("/kcc", require("../controllers/kcc"));



routes.use("/admin", require("./admin_routes"));

module.exports=routes;