import Product from "../models/Product"
import HTTPHandler from "../utils/HTTPHandler"

// CREATE - POST W/ BODY

export const postProduct: HTTPHandler = async (req, res) => {
    try {
        const product = new Product(req.body)
        await product.save()
        res.status(201).send(product)
    } catch (error) {
        res.status(400).send("Bad Request!")
    }
}

// READ ALL - GET

export const getProducts: HTTPHandler = async (req, res) => {
    try {
        const query: any = {}
        if (req.query.maxPrice)
            query.price = { $lte: +req.query.maxPrice }
        if (req.query.includes !== undefined) 
            query.name = { $regex: new RegExp(req.query.includes as string)}
        const products = await (
            req.query.limit 
            ? Product.find(query).limit(+req.query.limit) 
            : Product.find(query)
        )
        res.status(200).send(products) 
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Server Error!")
    }
}

// READ ONE - GET BY ID FROM PARAMS

export const getProduct: HTTPHandler = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).send(product)
    } catch (error) {
        res.status(404).send("Product Not Found!")
    }
}

// UPDATE WHOLE OBJECT - PUT BY ID & BODY

export const putProduct: HTTPHandler = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            req.body, 
            { new: true, runValidators: true }
        )
        res.status(200).send(product)
    } catch (error) {
        res.status(404).send("Product Not Found!")
    }
}

// DESTROY - DELETE BY ID IN PARAMS

export const deleteProduct: HTTPHandler = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(404).send("Product Not Found!")
    }
}