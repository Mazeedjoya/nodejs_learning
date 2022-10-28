const subcatmodel = require('../models/subCateg.model.js')

exports.subCategory = async (req ,res)=>{
    const {name , cat_id} = req.body
try {
    const subCat = await subcatmodel({
        name : name,
        cat_id: cat_id
    })
    subCat.save()
    res.send(subCat)
    
} catch (error) {
    res.send(error)
}
}

exports.getSubcategory = async(req , res)=>{
   try {
    const subcat = await subcatmodel.find().populate("cat_id");
    res.json({Message : "Subcategory list" , data : subcat})
    
   } catch (error) {
    res.status(500).json({Message : "Some thing went wrong"})
    
   }
}
