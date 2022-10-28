const dotenv = require('dotenv')
const express = require("express")

const multer = require('multer')
const path = require('path')
const bodyparser = require('body-parser')
const dbConnect = require('./dbconfig/dbConfig.js')
const category = require('./routes/Cat.routes.js')
const subCategory = require('./routes/subCat.routes.js')
const products = require('./routes/product.routes.js')
const offers = require('./routes/offer.route.js')
const images = require('./routes/image.route.js')
const voucher = require('./routes/voucher.routes.js')
const upload =multer({dest:'uploads/'}).single("imgs");



const  app = express();
dotenv.config();
app.use(bodyparser.json());
bodyparser.urlencoded({extended:true})
const port = process.env.PORT

app.post('/image' ,(req ,res)=>{
   upload(req , res ,(err)=>{
        if(err){
            res.status(400).send("Somethin Went wrong")
        }
        res.send(req.file)

    } )
})

dbConnect(process.env.URL)
app.use('/cat', category)
app.use('/subcat', subCategory)
// app.use('/product' , products)
app.use('/offer', offers)
app.use('/voucher' , voucher)
app.use('/alldocument', require('./routes/image.route'));



var storage = multer.diskStorage({
  destination: function (req, file, callback) {
      callback(null, 'images');
  },
  filename: function (req, file, callback) {
      if(file.mimetype == 'image/png'){
          var type = 'png'
      }else if(file.mimetype == 'image/pdf'){
          var type = 'pdf'
      }else if(file.mimetype == 'image/jpg'){
          var type = 'jpg'
      }else{
          var type = ''
      }
      var image = uniqueId()+Date.now()+"."+type
      

      callback(null, image);
  }
});



const imageStorage = multer.diskStorage({
    // Destination to store image     
    destination: 'images', 
      filename: (req, file, cb) => {
          cb(null, file.fieldname + '_' + Date.now() 
             + path.extname(file.originalname))
            // file.fieldname is name of the field (image)
            // path.extname get the uploaded file extension
    }
});
const imageUpload = multer({
    storage: imageStorage,
    limits: {
      fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
      if (!file.originalname.match(/\.(png|jpg)$/)) { 
         // upload only png and jpg format
         return cb(new Error('Please upload a Image'))
       }
     cb(undefined, true)
  }
}) 

const router  = express.Router()

// For Single image upload
router.post('/uploadimage', imageUpload.single('img'), (req, res) => {
  
     res.send(req.file)
}, (error, req, res, next) => {
     res.status(400).send({ error: error.message })
})
app.use(router);


app.listen(port , ()=>{
    console.log(`App is Running on ${port}`);
})


