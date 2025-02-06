import express, {json} from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(json())

const cartItems = [
    { id: 123, name: "shower curtain", price: 25.00}, 
    { id: 124, name: "curtain liner", price: 12.00}, 
    { id: 125, name: "curtain hooks", price: 3.00}
]

app.get("/cart-items", (req, res) => {
    res.status(200).send(`these are all the items in the cart: ${cartItems}`)
})

app.get("/cart-items/:id", (req, res) => {
    try {
        const query: {
            name?: string, 
            price?: number,
            maxPrice?: number, 
            prefix?: string
        } = {}
        //if (req.query.maxPrice) query["maxPrice"] = req.query.maxPrice
        const { id } = req.params
        const cartItem = cartItems.find(cartItem => cartItem.id === +id)
        res.status(200).send(`this is the cart item of that ID: ${cartItem}`)
    } catch (e) {
        res.status(404).send("ID Not Found")
    }
})

app.post("/cart-items", (req, res) => {
    const newCartItem = req.body
    cartItems.push(newCartItem)
    res.status(201).send(`you've just added this item to your cart: ${newCartItem}`)
})

app.put("/cart-items/:id", (req, res) => {
    const { id } = req.params
    const { name } = req.body
    const cartItem = cartItems.find(cartItem => cartItem.id === +id)
    try {
        //cartItem.name = name
        res.status(200).send(`cart item of this ID has been updated to: ${cartItem}`)
    } catch (e) {
        res.status(404).send("ID Not Found")
    }
})

app.delete("/cart-items/:id", (req, res) => {
    const { id } = req.params
    const index = cartItems.findIndex(cartItem => cartItem.id === +id)
    cartItems.splice(index, 1)

    res.status(204).send("your cart item has been deleted")
})

const PORT = 3000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))