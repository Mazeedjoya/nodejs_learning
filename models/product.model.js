const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name:{type:String , required: true},
    description: {type:String , required: true},
    pro_type: {type:String },
    pay_method : {type:String , required: true},
    created_by :[{ type: Schema.Types.ObjectId, ref: 'subcategory'}],
    in_stock:{type:Boolean, default:0},

    price: {type:Number},
   
    offerId:{type:String , default: null}

})
const productModel = mongoose.model('productlist' , productSchema)
module.exports = productModel
