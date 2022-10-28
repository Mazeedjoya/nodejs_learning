const catCon = require('../controllers/catControllers.js')
const express = require('express')
const router = express.Router()
router.post('/add', catCon.category)
router.get('/get' , catCon.getAll)
router.put('/update/:id' , catCon.update_category)
router.delete('/delete/:id' , catCon.deleteCat)

module.exports = router