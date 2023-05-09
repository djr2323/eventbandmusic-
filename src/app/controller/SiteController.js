const tickets = require("../models/tickets");

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
