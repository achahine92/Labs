import express, { json } from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import productsRouter from "../src/routes/productsRouter"
import usersRouter from "../src/routes/usersRouter"

// CONFIGURATIONS

dotenv.config() // helps protect secret data stored in .env
const app = express()
app.use(cors())
app.use(json())

// ROUTES

app.use("/products", productsRouter)
app.use("/users", usersRouter)

// DATABASE CONNECTION

const PORT = process.env.PORT || 6001
const MONGO_URL = process.env.MONGO_URL || ""

mongoose.set("strictQuery", false)
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Connected at PORT:${PORT}`)
    )
  })
  .catch(err =>
    console.log(`${err}, did not connect!`)
  )