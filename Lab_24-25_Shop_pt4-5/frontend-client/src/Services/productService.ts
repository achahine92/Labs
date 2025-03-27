import Product from "../Models/Product"
import axios from "axios"
import "../Images/coming-soon.jpg"

const baseUrl = "http://localhost:3000"
const imgUrl = "../Images/coming-soon.jpg"

const makeProduct = (product: any) => {
    const newProduct: Product = {
        _id: product._id,
        name: product.name,
        price: product.price,
        photoURL: imgUrl
    }
    return product
}

const scrub = (products: any[]): Product[] => 
    products.map(product => makeProduct(product))

// GET ALL
export const getProducts = async (
    maxPrice: number | undefined,
    includes: string | undefined,
    limit: number | undefined
): Promise<Product[]> => {
    const params = {
        ...(maxPrice ? { "max-price": maxPrice } : {}),
        ...(includes ? { "includes": includes }: {}),
        ...(limit ? { "limit": limit } : {})
    }
    return scrub((await axios.get(baseUrl + "/products", { params })).data)
}

// GET ONE
export const getProduct = async (_id: string): Promise<Product> => {
    return makeProduct((await axios.get(baseUrl + "/products/" + _id)).data)
}
