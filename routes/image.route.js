const express = require('express');
const router = express.Router();
const controller = require('../controllers/image.controller.js');



router.post('/documents', controller.documents);

module.exports = router;