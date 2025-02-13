import { Router } from "express"
import { postProduct, getProducts, getProduct, putProduct, deleteProduct } from "../controllers/products"

const routes = Router()

routes.post("/", postProduct)
routes.get("/", getProducts)
routes.get("/:id", getProduct)
routes.put("/:id", putProduct)
routes.delete("/:id", deleteProduct)

export default routes