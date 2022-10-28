const mongoose = require('mongoose');
const catSchema = new mongoose.Schema({
    category :{type : String},
    createDate:{type :Date , default :Date.now}
})

const catModel = mongoose.model('category' , catSchema)
module.exports = catModel