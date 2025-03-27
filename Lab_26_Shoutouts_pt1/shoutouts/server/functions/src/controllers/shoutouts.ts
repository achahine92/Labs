import Shoutout from "../models/Shoutout"
import establishConnection from "../establishConnection"
import HTTPHandler from "../helpers/HTTPHandler"

// CREATE

export const postShoutout: HTTPHandler = async (
	req,
	res
) => {
	try {
		await establishConnection()
		const shoutout = new Shoutout(req.body)
		await shoutout.save()
		res.status(201).send(shoutout)
	} catch (e: any) {
		res.status(403).send("Invalid Request")
	}
}

// READ

export const getShoutouts: HTTPHandler = async (
	req,
	res
) => {
	try {
		await establishConnection()
		const shoutouts = await Shoutout.find()
		res.status(200).send(shoutouts)
	} catch (e: any) {
		res.status(500).send("Internal Server Error")
	}
}

// READ ONE BY ID

export const getShoutout: HTTPHandler = async (
	req,
	res
) => {
	try {
		await establishConnection()
		const shoutout = await Shoutout.findById(
			req.params.id
		)
		res.status(200).send(shoutout)
	} catch (e: any) {
		res.status(404).send("Shouout not found")
	}
}

// READ ALL BY TO

export const getShoutoutsByTo: HTTPHandler = async (
	req,
	res 
) => {
	try {
		const query: {
			to?: string,
			from?: string
		} = {}
		if (req.query.to)
			query["to"] = "" + req.query.to
		if (req.query.from)
			query["from"] = "" + req.query.from
		const shoutouts = await Shoutout.find(query)
		res.status(200).send(shoutouts)
	} catch {
		res.status(500).send("Internal server error")
	}
}

// UPDATE

export const putShoutout: HTTPHandler = async (
	req,
	res
) => {
	try {
		await establishConnection()
		const shoutout = await Shoutout.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		if (!shoutout) throw new Error()
		await shoutout.save()
		res.status(200).send(shoutout)
	} catch (e: any) {
		res.status(404).send("Shouout not found")
	}
}

// DESTROY

export const deleteShoutout: HTTPHandler = async (
	req,
	res
) => {
	try {
		await establishConnection()
		await Shoutout.findByIdAndDelete(req.params.id)
		res.status(204).send()
	} catch (e: any) {
		res.status(404).send("Shouout not found")
	}
}