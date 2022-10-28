const mongoose  = require('mongoose'),
Schema  = mongoose.Schema ;
const offerSchema = new mongoose.Schema({
    name: {type: String},
    startDate : {type: Date, default :Date.now},
    endDate : {type: Date , Date: this.toString() },
    is_Expire: {type: Boolean , enum:[true ,false]},
    offerType:{type :String , enum:["cash" , "voucher"]},
    p_id: [{type: Schema.Types.ObjectId, ref:'productlist'}

    ]
})
const offerModel =mongoose.model("offer" , offerSchema)
module.exports = offerModel