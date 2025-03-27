import { FC } from "react"
import CartItem from "../Models/CartItem"
import "./CartRow.css"

interface Props {
    cartItem: CartItem
}

const CartRow: FC<Props> = ({ cartItem }) => {
    return (
        <div className="cart-row">
            <h4>cart row</h4>
            <li key={cartItem._id}>
                {cartItem.product.name}: {cartItem.quantity} - ${cartItem.product.price}
            </li>
        </div>
    )
}

export default CartRow