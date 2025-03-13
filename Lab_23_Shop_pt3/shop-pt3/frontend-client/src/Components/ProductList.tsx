import Product from "../Models/Product"
import { FC } from "react"
import ProductCard from "./ProductCard"
import "./ProductList.css"

interface Props {
    products: Product[]
}

const ProductList: FC<Props> = ({ products }) => {
    return (
        <div className="product-list">
            <ul>
                {
                    products.map((product: Product) => (
                        <li key={product._id}>
                            <ProductCard product={product}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList