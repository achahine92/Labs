import { Router } from "express"
import { postUser, getUser, getUsers, putUser, deleteUser } from "../controllers/users"
import { deleteCartItem, getCartByUser, patchCartItem, postCartItem } from "../controllers/cartItems"

const routes = Router()

routes.post("/", postUser)
routes.get("/:id", getUser)
routes.get("/", getUsers)
routes.put("/:id", putUser)
routes.delete("/:id", deleteUser)
routes.get("/:id/cart", getCartByUser)
routes.post("/:id/cart", postCartItem)
routes.patch("/:userId/cart/:productId", patchCartItem)
routes.delete("/:userId/cart/:productId", deleteCartItem)


export default routes