import * as functions from "firebase-functions"
import express from "express"
import cors from "cors"
import shoutoutsRouter from "./routes/shoutoutsRouter"

// CONFIG

const app = express()

// CORS Middleware
app.use(cors())

// PUBLIC ROUTES
app.use("/shoutouts", shoutoutsRouter)

// OPTIONS
app.options("*", cors())

// EXPORT API
export const api = functions.https.onRequest(app)