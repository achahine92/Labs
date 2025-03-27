import { createContext } from "react"
import Product from "../Models/Product"

interface CartModel {
    cartItemCounts: any
    addCartItem: (_id: string, product: Product) => void
}

const defaultContext: CartModel = {
    cartItemCounts: {}, 
    addCartItem: () => {}
}

const CartContext = createContext(defaultContext)

export default CartContext