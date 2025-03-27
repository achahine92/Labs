import Product from "../Models/Product"
import { useEffect, useState } from "react"
import ProductCard from "./ProductCard"
import "./ProductList.css"
import { Link, useSearchParams } from "react-router-dom"
import { getProducts } from "../Services/productService"
import Filter from "./Filter"

const ProductList = () => {
    const [searchParams] = useSearchParams()
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
    
    const _maxPrice = searchParams.get("maxPrice")
    const maxPrice = _maxPrice === null ? undefined : +_maxPrice
    
    const _includes = searchParams.get("includes")
    const includes = _includes === null ? undefined : _includes
    
    const _limit = searchParams.get("limit")
    const limit = _limit === null ? undefined : +_limit

    useEffect(() => {
        getProducts(maxPrice, includes, limit).then(ps => setFilteredProducts(ps))
    }, [maxPrice, includes, limit])

    if (!filteredProducts) return <>Loading...</>
    return (
        <div className="product-list">
            <Filter />
            <ul>
                {
                    filteredProducts.map((product: Product) => (
                        <li key={product._id} >
                            <Link to={"/products/" + product._id} >
                                <ProductCard product={product} />
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ProductList