import axios from "axios"
import Shoutout from "../interfaces/Shoutout"

const baseUrl = import.meta.env.VITE_API_BASE_URL + "/shoutouts"

// CREATE
export const postShoutout = async (newShoutout: Shoutout): Promise<Shoutout> =>
    (await axios.post(baseUrl, newShoutout)).data

// GET ALL
export const getShoutouts = async (): Promise<Shoutout[]> =>
    (await axios.get(baseUrl)).data

// GET SHOUTOUTS BY TO
export const getShoutOutsByTo = async (to: string): Promise<Shoutout[]> => 
    (await axios.get(baseUrl + "/to", { params: { to } })).data

// UPDATE ONE
export const putShoutout = async (newShoutout: Shoutout, id: string): Promise<Shoutout> =>
    (await axios.put(baseUrl + "/" + id, newShoutout)).data

// DELETE ONE
export const deleteShoutout = async (id: string): Promise<void> =>
    (await axios.delete(baseUrl + "/" + id))