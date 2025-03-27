import { FC } from "react"
import Product from "../Models/Product"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import imgUrl from "../Images/coming-soon.jpg"

interface Props {
    product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
    
    return (
        <div className="product-card">
            <Link to={"/products/" + product._id} key={product._id}>
                <h4>{product.name}</h4>
                <p>${product.price}</p>
                <img src={imgUrl} alt="coming-soon" className="product-img"/>
            </Link>
        </div>
    )
}

export default ProductCard