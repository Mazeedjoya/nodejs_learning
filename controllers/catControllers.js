const catModel= require('../models/category.model.js')

exports.category=  (req , res )=>{
    const{category, createDate} = req.body
const genCat =  new catModel({
    category  : category,
    createDate :createDate
})
genCat.save()
res.send(genCat)
console.log(genCat);
}

exports.getAll = async (req , res)=>{
    try {
        const categories = await catModel.find().populate("");
    res.json({Message: "All Categories" , data : categories})
        
    } catch (error) {
        res.status(500).json({Message :"Some thing went wrong"})
    }
}
exports.update_category = async (req ,res)=>{
    const id = req.params.id
    try {
        const category = await catModel.findByIdAndUpdate(id)
        res.send(category)
    } catch (error) {
       res.send(error) 
    }
}

exports.deleteCat = async(req ,res)=>{
    const id = req.params.id 
    try {
        if(id===null){
            const cat = await catModel.findByIdAndDelete(id)
            res.json({Message : "deleted ", data : cat})
        }else{
           
            res.json({Message : "No match found",id : id})
        }

    } catch (error) {
       res.send("Some thing went wrong ") 
    }
}