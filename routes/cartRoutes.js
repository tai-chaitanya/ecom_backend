const express =require('express')
const authMiddleware = require('../middleware/authMiddleware')
const { addtocart, getCart, removeFromCart } = require('../controllers/cartControllers')

const cartrouter = express.Router()
cartrouter.post("/add",authMiddleware,addtocart)
cartrouter.get("/",authMiddleware,getCart)
cartrouter.post("/remove",authMiddleware,removeFromCart)

module.exports=cartrouter
