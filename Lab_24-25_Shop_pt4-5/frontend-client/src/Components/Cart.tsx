import { useEffect, useState } from "react"
import "./Cart.css"
import CartRow from "./CartRow"
import { useParams } from "react-router-dom"
import { getCartByUser } from "../Services/cartService"
import CartItem from "../Models/CartItem"

const Cart = () => {
    const userId = useParams().userId!
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    useEffect(() => {
        getCartByUser(userId).then(c => {
            setCartItems(c)})
    }, [userId])
    
    return (
        <div className="cart">
            <h3>Your cart</h3>
            <ul>
                {
                    cartItems.map(cartItem => (
                        <CartRow cartItem={cartItem} />
                    ))
                }
            </ul>
        </div>
    )
}

export default Cart