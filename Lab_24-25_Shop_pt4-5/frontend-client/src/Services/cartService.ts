import axios from "axios"
import "../Images/coming-soon.jpg"
import CartItem from "../Models/CartItem"

const baseUrl = "http://localhost:3000/users"

const makeCartItem = (cartItem: any) => {
    const newCartItem: CartItem = {
        _id: cartItem._id,
        userId: cartItem.userId,
        product: cartItem.product,
        quantity: cartItem.quantity
    }
    return cartItem
}

const scrub = (cartItems: any[]): CartItem[] => 
    cartItems.map(cartItem => makeCartItem(cartItem))

// READ ALL - GET CART ITEMS IN A CART BY USER ID
// /users/:userId/cart
export const getCartByUser = async (userId: string): Promise<CartItem[]> => {
    return scrub((await axios.get(baseUrl + "/" + userId + "/cart")).data)
}

// CREATE - POST TO CART BY USER ID
// /users/:userId/cart
export const postCartItem = async (
    userId: string,
    productId: string,
    quantity: string
): Promise<CartItem> => {
    return makeCartItem((
        await axios.post(`${baseUrl}/${userId}/cart/${productId}`, 
        { productId, quantity }
    )).data)
}

// UPDATE - PATCH THE QUANTITY OF A CART ITEM BY USER ID AND PRODUCT ID
// /users/:userId/cart/:productId 
export const patchCartItem = async (
    userId: string,
    productId: string,
    quantity: string
): Promise<CartItem> => {
    return makeCartItem((
        await axios.patch(`${baseUrl}/${userId}/cart/${productId}`, 
        { quantity }
    )).data)
}

// DESTROY - DELETE PRODUCT ID FROM CART BY USER ID
// /users/:userId/cart/:productId
export const deleteCartItem = async (
    userId: string,
    productId: string
): Promise<void> => {
    await axios.delete(`${baseUrl}/${userId}/cart/${productId}`)
}