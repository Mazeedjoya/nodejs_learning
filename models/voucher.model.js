const mongoose = require('mongoose'),
Schema = mongoose.Schema
const voucher = new mongoose.Schema({
    name:{type:String },
    voucherType:{type:String , enum:["Amazon" ,"Flipkart","Google pay"]},
    voucherPoint :{type:String },
    offer_id :[{type : Schema.Types.ObjectId, ref: "productlist"}]
})
const voModel =  mongoose.model("voucher" , voucher)
module.exports = voModel;