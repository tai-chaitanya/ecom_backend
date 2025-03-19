const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userID:String,
    items:[
        {
          productId:String,
          quantity:Number,
          name:String,
          price:String
        }
    ]
})
module.exports=mongoose.model('cart',cartSchema)