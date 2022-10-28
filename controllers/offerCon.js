const mongoose = require('mongoose')
const offers = require('../models/offer.js')

exports.offercreate = async (req, res) => {
    const { name, startDate, endDate, is_Expire, offerType, p_id } = req.body
    try {
        const offer = await new offers({
            name: name,
            startDate: startDate,
            endDate: endDate,
            is_Expire: is_Expire,
            offerType: offerType,
            p_id: p_id
        })
        offer.save()
        res.json({offer : offer})

    } catch (error) {
res.send("offer can't create")
    }
}
exports.getoffer = async (req , res)=>{
    const offer = await offers.find().populate("p_id")
    res.send(offer)
}
