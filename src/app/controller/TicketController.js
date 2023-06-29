const tickets = require("../models/tickets");
const { mongooseToObject,multiMongooseToObject } = require("../../ulti/mongoose");

class TicketController {
  show(req, res, next) {
    const data = req.data;
    console.log(data)
    tickets
      .find({})
      .then((ticket) => {
        res.render("tickets/show", {mydata:mongooseToObject(data), ticket: multiMongooseToObject(ticket),layout:"adminmain"});
      })
      .catch(next);
  }
  destroy(req, res, next){
    tickets.deleteOne({_id:req.params.id},req.body).then(()=>res.redirect("back")).catch(next)
  }
}

module.exports = new TicketController();
