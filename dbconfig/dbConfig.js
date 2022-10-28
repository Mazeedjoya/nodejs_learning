const mongoose = require('mongoose');

const dotenv = require('dotenv')
dotenv.config()
const dbConnect = async (URL)=>{

    try {
        const dbOptions = {
            dbName :process.env.dbName
        }
        await mongoose.connect(URL , dbOptions)
        console.log("Connected to Database");
        
    } catch (error) {
        console.log(error);
    }
}
module.exports = dbConnect