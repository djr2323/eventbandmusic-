const express = require('express');
const router = express.Router();

const ticketController = require('../app/controller/TicketController')
const LoginController = require('../app/controller/LoginController')

router.get('/show',LoginController.checkedlogin,ticketController.show);
router.delete('/:id',ticketController.destroy);

module.exports = router;