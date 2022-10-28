// const jwt  = require('jsonwebtoken')
// const model = require('../model')

// var checkAuth = async (req , res , next)=>{
//     let token;
//     const{authorization} = req.headers 
//     if(authorization && authorization.startsWith('Bearer')){
//         try {     
//             token = authorization.split(" ")[1]
//             console.log(token);

//             // verify token 
//             const {userId} = jwt.verify(token , process.env.jwtSecretkey)

//             // get user from Token
//             req.user = await model.findById(userId).select("-password")
//             next()

//         } catch (error) {
//             res.status(401).send({status: "failed" , message : "Unauthorized User"})
//         }
//     }
//     if(!token){
//         res.status(401).send({"status":"Failed " , "Message":"No Token Found"})
//     }
// }
// export default checkAuth


// const model = require('./model')
// const jwt = require("jsonwebtoken")

// var checkauth  = async(req ,res , next)=>{
//     let token;
// const {authorization} = req.headers 
// if(authorization && authorization.startsWith("Bearer")){
//     try {
//         // get token from header
//         token = authorization.split(" ")[1]
//         console.log(token);
    
//         // verify token
//         const{userId} = jwt.verify(token , process.env.jwtSecretKey)
//  //Get user from token
//  req.user = await model.findById(userId).select("-password")
// next()

//     } catch (error) {
        
//     }
// }
// }


// const model = require('model')
// const jwt = require("jsonwebtoken")

// exports.Authenticate  = async(req , res , next)=>{
//     let token ;
//     const {authorization} = req.headers
//     if(authorization && authorization.satartsWith('Bearer')){
//         try {
//             // get token from header
//             token = authorization.split(" ")[1]

//             // verify token

        //     const {userId} = jwt.verify(token ,process.env.jwtSecretkey)

        //     // get token from user

        //     const user = await model.findById(userId).select("-password")

        //     next()

        // } catch (error) {
        //     res.send(error)
//         }
//     }
//     if(!token){
//         res.send("unauthorized user ")
//     }
// }


// const token =jwt.sign({userId: saved_user._id}, process.env.jwtSecretkey, {expiresIn:"3d"})
// res.send(token, "token generated Succesfully")

// const logout = jwt.sign({userId : _id}, process.env.jwtSecretkey, {expiresIn:"0s"})
// res.send("logooutSuccesfully ")
 

/**
 * logout api 
 * get token from user and match 
 * verify user  if user found match token if token match then( EXPIRE TOKEN AND EXCESS ) expiresIn "0second"
 */ 

// SEARCH api for text search api 

var time =  setInterval(()=>{
        console.log("work");
    },1000)

setTimeout(()=>{
    clearInterval(time)
} ,4000)

