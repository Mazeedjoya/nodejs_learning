const proModel  = require('../models/product.model.js')
const multer  = require("multer")
const jwt = require('jsonwebtoken')
const jwtSecretKey = "helloworld"
const upload = multer({ dest: 'uploads/' })
exports.addproduct = async (req , res)=>{
    const {name , description, pro_type, pay_method, created_by, in_stock , price ,  offerId} = req.body;

    try {
        const productdetail = await new proModel({
            name: name, 
            description : description,
            pro_type : pro_type,
            pay_method: pay_method,
             created_by: created_by,
             in_stock: in_stock,
             price: price,
            
              offerId : offerId
        })
        productdetail.save()
        const token = jwt.sign({pid: productdetail._id} ,jwtSecretKey,{expiresIn:'1m'} )
        res.send({detail: productdetail , token:token})
    } catch (error) {
        console.log(error);
    }
}



exports.getProductByfield = async(req , res)=>{   /// ////  //// Testing
    const id = req.query.id
    try {
        if(!id){
            res.send("No item found")
        }else{
        const product = await proModel.findById(id).populate('created_by')
        res.send(product)
        }

    } catch (error) {
        res.send("Error happening " + error)
    }
}
exports.logout  = async(req , res)=>{
   
    try {
       
    } catch (error) {
        res.status(404).send(error)
    }
    if(!token){
        res.send("unauth user")
    }
   
}

exports.getProductlist = async (req , res)=>{
   try {
    const pipeline = [
        
    ];
    const db = client.db("aggregation");
const coll = db.collection("restaurants");
    const aggCursor = await coll.aggregate();
    for await (const doc of aggCursor) {
        console.log(doc);
    }
    res.json({Message: "Product List" , data : aggCursor})
    return;
    const productlist = await proModel.aggregate()
    console.log("AAAA------",typeof productlist)
    // const productlist = await proModel.find().populate('created_by')
    
   } catch (error) {
    res.send(error)
   }

}
exports.updateProduct  = async(req ,res)=>{
    try {
        const id = req.params.id 
         const product = await proModel.findByIdAndUpdate(id , req.body)
         res.json({Status : "success" , data : product})
        

    } catch (error) {
        
        res.send("something went wrong")
    }
}
exports.deletproduct = async (req , res)=>{
    try {
        const id = req.params.id 
        if(id===null){
        const product = await proModel.findByIdAndDelete(id)
        res.json( {Message:"Product Deleted" , data : product})
        }
        else{
            res.send("No user Found ")
        }
    } catch (error) {
        res.send("Can't accesš ")
    }
}

