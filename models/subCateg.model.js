
const mongoose = require('mongoose'),

Schema = mongoose.Schema;
const subcatSchema = new mongoose.Schema({
    name:{type :String , required : true},
    cat_id:[{ type: Schema.Types.ObjectId, ref: 'category' }]

})
const subcatModel = mongoose.model('subcategory' , subcatSchema)
module.exports = subcatModel


