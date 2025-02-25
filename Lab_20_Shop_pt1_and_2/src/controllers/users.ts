import User from "../models/User"
import HTTPHandler from "../utils/HTTPHandler"

// CREATE - POST W/BODY

export const postUser: HTTPHandler = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send("Bad Request!")
    }
}

// READ ALL - GET

export const getUsers: HTTPHandler = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send("Internal Server Error!")
    }
}

// READ ONE - GET W/ID FROM PARAMS

export const getUser: HTTPHandler = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send("User Not Found!")
    }
}

// UPDATE WHOLE OBJECT - POST W/ID FROM PARAMS

export const putUser: HTTPHandler = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id, 
            req.body,
            { new: true, runValidators: true }
        )
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send("User Not Found!")
    }
}

// DESTROY - DELETE W/ID FROM PARAMS

export const deleteUser: HTTPHandler = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.status(204).send()
    } catch (error) {
        res.status(404).send("User Not Found!")
    }
}