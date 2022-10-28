
const jwt = require("jsonwebtoken")
const pmodel = require('../models/product.model.js')
const jwtSecretKey = "helloworld"
var checkAuth = async(req ,res ,next)=>{
    let token ;
    const {authorization} = req.headers 
    if(authorization && authorization.startsWith("Bearer")){
    try {
        token = authorization.split(" ")[1]
       
        //verify token
        const {pid} = jwt.verify(token ,jwtSecretKey)
        const product = await pmodel.findById(pid)
        next()
    } catch (error) {
        res.status(401).send(error)
        
    }

    }
}
//   app.put("/api/logout", authToken, function (req, res) {
//     const authHeader = req.headers["authorization"];
//     jwt.sign(authHeader, "", { expiresIn: 1 } , (logout, err) => {
//     if (logout) {
//     res.send({msg : 'You have been Logged Out' });
//     } else {
//     res.send({msg:'Error'});
//     }
//     });
//     });

 
module.exports = checkAuth;