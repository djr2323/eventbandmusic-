const express = require('express');
const router = express.Router();

const LoginController = require('../app/controller/LoginController')

router.post('/thanhcong',LoginController.handleLogin);
router.get('/',LoginController.show);

module.exports = router;