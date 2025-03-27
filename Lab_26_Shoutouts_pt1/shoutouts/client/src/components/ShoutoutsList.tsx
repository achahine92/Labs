import { useEffect, useState } from "react"
import ShoutoutDisplay from "./ShoutoutDisplay"
import Shoutout from "../interfaces/Shoutout"
import { deleteShoutout, getShoutouts, getShoutOutsByTo, postShoutout } from "../services/shoutoutService"
import Form from "./Form"
import "../component-styles/ShoutoutList.css"

const ShoutoutsList = ({ to }: { to?: string }) => {
    const [shoutouts, setShoutouts] = useState<Shoutout[]>([])

    useEffect( () => {
        const fetchShoutouts = async () => {
          if (to) {
            const fetchedShoutouts = await getShoutOutsByTo(to)
            setShoutouts(fetchedShoutouts)
          } else {
            const fetchedShoutouts = await getShoutouts()
            setShoutouts(fetchedShoutouts)
          }
        }

        fetchShoutouts()
    }, [to])

    const addShoutout = async (newShoutout: Shoutout) => {
      const addedShoutout = await postShoutout(newShoutout)
      setShoutouts(ss => [...ss, addedShoutout])
    }

    const removeShoutout = async (id: string) => {
      await deleteShoutout(id)
      const shoutoutIndex = shoutouts.findIndex(sO => sO.id === id)
      setShoutouts(ss => [
        ...ss.slice(0, shoutoutIndex),
        ...ss.slice(shoutoutIndex + 1)
      ])
    }
    
    return (
      <div className="shoutouts-list">
        <ul>
          {
            shoutouts.map(shoutout => (
              <li key={shoutout.id}>
                <ShoutoutDisplay shoutout={shoutout} removeShoutout={removeShoutout}/>
              </li>
            ))
          }
        </ul>
        <Form addShoutout={addShoutout} />
      </div>
    )
  }
  
  export default ShoutoutsList