const productlist = require('../controllers/product.cont.js')
const {imageUpload} = require('../Services/image.service.js')
console.log("PAthhhhh-----",typeof imageUpload)
const express  = require('express')
// const checkAuth = require('../middd/auth.js')
const router  = express.Router()
// router.use('/get' , checkAuth)
// router.use('/logout' , checkAuth)
router.post('/add', imageUpload.single("image"),productlist.addproduct )
router.get('/get', productlist.getProductlist)
router.put('/update/:id', productlist.updateProduct)
router.delete('/delete/:id', productlist.deletproduct)
router.get('/getbyid', productlist.getProductByfield)
router.put('/logout',  productlist.logout)


module.exports = router