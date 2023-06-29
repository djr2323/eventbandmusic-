const user = require("../models/user");
const { mongooseToObject } = require("../../ulti/mongoose");

const db = require("../../config/db")


class SignupController {
  show(req, res, next) {
    res.render("signup/show");
  }
  checkLogin(req, res, next) {
    var username = req.body.username;
    var password = req.body.password

    user.findOne({
        username: username,
        password: password
      })
      .then( data => {
        if(data) { 
          var token = jwt.sign({id:data._id},'mk');
          res.cookie('token',token,{ maxAge: 900000, httpOnly: true });
          return res.redirect('/admin')
          // next()
        } else{
          res.status(500).json("error");
        }
      })
      .catch(err=>res.status(500).json("error"));
  }
  
  checkedlogin(req, res, next) {
    // db.find(req.cookies.token._id)
    try{
      console.log(req.cookies.token)
      var idUser = jwt.verify(req.cookies.token,'mk');
      console.log(idUser.id);
      user.findOne({_id:idUser.id}).then((data)=>{
        if(data){
          req.data = data;
          next()
        }else{
          res.json("NOT PERMISSION")
        }
      }).catch((err)=>{});
    }catch(err){
      res.redirect("/login")
    }
}
checkAdmin(req, res, next){
    if(req.data.role==="admin"){
      next();
    }
  }
// indexAdmin(req, res, next) {
//     console.log(req.data);
//     res.render('homeadmin',{layout:'adminmain'});
//   }
}

module.exports = new LoginController();
