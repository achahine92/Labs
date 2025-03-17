import { useState, useEffect } from "react"
import ProductList from "./ProductList"
import Product from "../Models/Product"
import { getProducts } from "../Services/productService"
import "./App.css"

const App = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        getProducts().then(ps => {
            setProducts(ps)
        })
    }, []); // Add dependency array so it only renders on mount
    
    return (
        <>
            <h1>Shop for your favorite products!</h1>
            <ProductList products={products}/>
        </>
    )
}

export default App
