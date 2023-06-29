const express = require('express');
const router = express.Router();

const user = require('../app/models/user');

const LoginController = require('../app/controller/LoginController');
const AdminController = require('../app/controller/AdminController');
const SiteController = require('../app/controller/SiteController');

// router.get('/admin',LoginController.checkedlogin,LoginController.indexAdmin)
router.post('/',LoginController.checkLogin,SiteController.index);
router.get('/',LoginController.show);

module.exports = router;