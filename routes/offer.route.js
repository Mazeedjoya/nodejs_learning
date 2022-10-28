const offer = require('../controllers/offerCon.js')
const express = require('express')
const router = express.Router()

router.post('/create' , offer.offercreate)
router.get('/getoffer' , offer.getoffer)
module.exports = router
