import CartItem from "../models/CartItem"
import Product from "../models/Product"
import User from "../models/User"
import HTTPHandler from "../utils/HTTPHandler"

// CREATE - POST TO CART BY USER ID
// /users/:userId/cart

export const postCartItem: HTTPHandler = async (req, res) => {
    try {
        const userId = req.params.id
        const { productId, quantity } = req.body

        const user = await User.findById(userId)
        if (!user) throw new Error("User Not Found!")

        const product = await Product.findById(productId)
        if (!product) throw new Error("Product Not Found!")
        
        let cartItem = await CartItem.findOne({userId, productId})
        if (cartItem) cartItem.quantity++
        else cartItem = new CartItem({userId, productId, quantity})
        
        await cartItem.save()
        res.status(200).send(cartItem)
    } catch (error) {
        console.log(error)
        res.status(400).send("Bad Request!")
    }
}

// READ ALL - GET CART ITEMS IN A CART BY USER ID
// /users/:userId/cart

export const getCartByUser: HTTPHandler = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findById(userId)
        if (!user) throw new Error("User Not Found!")
        const cartItems = await CartItem.find({userId}).populate("productId", "name price")
        res.status(200).send(cartItems)
    } catch (error) {
        res.status(404).send("User Not Found!")
    }
}

// UPDATE - PATCH THE QUANTITY OF A CART ITEM BY USER ID AND PRODUCT ID
// /users/:userId/cart/:productId 
export const patchCartItem: HTTPHandler = async (req, res) => {
    try {
        const {userId, productId} = req.params
        const {quantity} = req.body
        
        const user = await User.findById(userId)
        if (!user) throw new Error("User Not Found!") 

        const cartItem = await CartItem.findOne({userId, productId})
        if (!cartItem) throw new Error("Cart Item Not Found!")
        cartItem.quantity = quantity
        
        await cartItem.save()
        res.status(200).send(cartItem)
    } catch (error) {
        //console.log(error)
        res.status(500).send("Internal Server Error!")
    }
}

// DESTROY - DELETE PRODUCT ID FROM CART BY USER ID
// /users/:userId/cart/:productId

export const deleteCartItem: HTTPHandler = async (req, res) => {
    try {
        const {userId, productId} = req.params
        
        const user = await User.findById(userId)
        if (!user) throw new Error("User Not Found!") 

        const cartItem = await CartItem.findOne({userId, productId})
        if (!cartItem) throw new Error("Cart Item Not Found!")
        
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1
            await cartItem.save()
        } else await CartItem.deleteOne({userId, productId})

        res.status(204).send("Cart Item Has Been Deleted!")
    } catch (error) {
        res.status(404).send("Cart Item Not Found!")
    }
}