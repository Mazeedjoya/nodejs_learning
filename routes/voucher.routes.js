const voucher = require('../controllers/voucher.cont.js')
const express = require('express')
const router = express.Router()

router.post('/postvoucher', voucher.generateVoucher)
router.get('/getvoucher' , voucher.getVoucher)

module.exports = router ;