import Product from "../Models/Product"
import axios from "axios"
import "../Images/coming-soon.jpg"

// You'll want to try importing the base url like you would an API with an .env file
// const baseUrl = import.meta.env.VITE_API_BASE_URL; // located in a env.local file
const baseUrl = "http://localhost:3000"
const imgUrl = "../Images/coming-soon.jpg"

const scrub = (response: any): Product[] => 
    response.map((product: Product) => ({
        name: product.name,
        price: product.price,
        photoUrl: imgUrl
    }))

// GET
export const getProducts = async (): Promise<Product[]> => 
    scrub((await axios.get(baseUrl + "/products")).data)
