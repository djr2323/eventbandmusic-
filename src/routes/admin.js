const express = require('express');
const router = express.Router();

const user = require('../app/models/user');

const LoginController = require('../app/controller/LoginController');
const AdminController = require('../app/controller/AdminController');
const TicketController = require('../app/controller/TicketController');

router.get('/',LoginController.checkedlogin,AdminController.index)
router.get('/home',AdminController.indexHome)

module.exports = router;