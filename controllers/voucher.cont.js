const voucher = require('../models/voucher.model.js')


exports.generateVoucher= async (req , res)=>{
    const {name ,voucherType , voucherPoint , offer_id } = req.body
    try {
        const voucherGen = await new voucher({
            name: name ,
            voucherType: voucherType,
            voucherPoint: voucherPoint,
            offer_id: offer_id
        })
        voucherGen.save()
        res.json({Message : "success" , voucher : voucherGen})
        
    } catch (error) {
        res.send(error)
    }
}

exports.getVoucher = async (req , res)=>{
    const voucher1 = await voucher.find().populate("offer_id")
    res.send(voucher1)
}