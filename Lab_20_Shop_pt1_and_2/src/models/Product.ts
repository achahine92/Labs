import { Schema, model } from "mongoose"

const ProductSchema = new Schema(
    {
        name: {
            type: String, 
            required: true
        }, 
        price: {
            type: Number, 
            required: true
        }, 
        photoURL: {
            type: String, 
            default: false
        },
    },
    { timestamps: true }
)

const Product = model("Product", ProductSchema)
export default Product