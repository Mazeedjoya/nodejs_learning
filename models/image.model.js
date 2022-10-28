const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const documentSchema = new Schema({
    file:{
        type:String
    }
});

const documents = mongoose.model('documents', documentSchema);

module.exports = documents;