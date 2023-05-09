const user = require("../models/user");
const { mongooseToObject } = require("../../ulti/mongoose");

class LoginController {
  show(req, res, next) {
    res.render("login/show");
  }
  handleLogin(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    user.findOne({
         username: username,
         password: password
      })
      .then( data => {
        if(data) {
          res.render("adminmain");
        } else{
          res.status(500).json("error");
        }
        console.log(data)
      })
      .catch(() => {
        res.json("fail");
      });
      console.log();
  }
}

module.exports = new LoginController();
