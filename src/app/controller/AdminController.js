const user = require("../models/user");
const { mongooseToObject } = require("../../ulti/mongoose");
const jwt = require("jsonwebtoken");

class AdminController {
    index(req, res, next) {
        const data = req.data;

        res.render("homeadmin",{layout:"adminmain",mydata:mongooseToObject(data)});
        console.log(mongooseToObject(data).username);
    }
    indexHome(req, res, next) {
        res.render("home")
    }
}

module.exports = new AdminController();