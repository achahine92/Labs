import Product from "../Models/Product"
import { useContext, useEffect, useState } from "react"
import "./ProductDetails.css"
import imgUrl from "../Images/coming-soon.jpg"
import { getProduct } from "../Services/productService"
import { useParams } from "react-router-dom"
import CartContext from "../Contexts/CartContext"

const ProductDetails = () => {
    const [product, setProduct] = useState<Product | null>(null)
    const id = useParams().id
    const { addCartItem } = useContext(CartContext)

    const handleAddCartItem = () => {
        if (product) addCartItem(product._id || "", product)
    }

    useEffect(() => {
        if (id) getProduct(id).then(p => setProduct(p))
    }, [id])
    
    if (!product) return <>Loading...</>
    return (
        <div className="product-details">
            <h4>{product.name}</h4>
            <p>${product.price}</p>
            <img src={imgUrl} alt="coming-soon" className="product-img"/>
            <button onClick={handleAddCartItem}>Add to Cart</button>
        </div>
    )
}

export default ProductDetails