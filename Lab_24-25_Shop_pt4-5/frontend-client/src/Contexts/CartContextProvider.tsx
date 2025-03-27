import { FC, ReactNode, useState } from "react"
import CartContext from "./CartContext"
import Product from "../Models/Product"

interface Props {
    children: ReactNode
}

const CartContextProvider: FC<Props> = ({ children }) => {
    const [cartItemCounts, setCartItemCounts] = useState({})
    
    const addCartItem = (_id: string, product: Product) => {
        setCartItemCounts(cIs => {
            const newCartItemCounts: any = {...cartItemCounts}
            if (newCartItemCounts[_id]) newCartItemCounts[_id]++
            else newCartItemCounts[_id] = 1
            return newCartItemCounts
        })
    }
        

    return (
        <CartContext.Provider value={{ cartItemCounts, addCartItem }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider