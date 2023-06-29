const express = require('express');
const router = express.Router();

const SiteController = require('../app/controller/SiteController');
const LoginController = require('../app/controller/LoginController');

router.post('/store',SiteController.store);
router.get('/',SiteController.index);

module.exports = router;