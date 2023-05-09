const express = require('express');
const router = express.Router();

const SiteController = require('../app/controller/SiteController');

router.post('/store',SiteController.store);
router.get('/',SiteController.index);

module.exports = router;