import { Schema, model } from "mongoose"
import Product from "./Product"
import User from "./User"

const CartItemSchema = new Schema(
    {
        userId: { 
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true
        }, 
        productId: { 
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true
        }, 
        quantity: {
            type: Number, 
            default: false
        },
    },
    { timestamps: true }
)

const CartItem = model("CartItem", CartItemSchema)
export default CartItem