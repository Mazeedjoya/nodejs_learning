const subCont = require('../controllers/subCateg.js')
const express = require('express')
const router = express.Router()

router.post('/add' , subCont.subCategory)
router.get('/get' , subCont.getSubcategory)


module.exports = router