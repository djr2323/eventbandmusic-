const { response } = require("express");
const tickets = require("../models/tickets");
const {mongooseToObject} = require("../../ulti/mongoose");
const user = require("../models/user");

class SiteController {
  index(req, res, next) {
    res.render("home");
  }
  store(req, res, next) {
    const dataForm = req.body;
    const ticket = new tickets(dataForm);
    ticket
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch(next);
  }
  
}

module.exports = new SiteController();
