import Product from "../Models/Product"
import { FC } from "react"
import "./ProductCard.css"
import imgUrl from "../Images/coming-soon.jpg"

interface Props {
    product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
    return (
        <div className="product-card">
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <img src={imgUrl} alt="coming-soon" className="product-img"/>
        </div>
    )
}

export default ProductCard