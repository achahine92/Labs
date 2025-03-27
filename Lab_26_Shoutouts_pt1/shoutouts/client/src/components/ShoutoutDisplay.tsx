import { FC } from "react"
import Shoutout from "../interfaces/Shoutout"
import "../component-styles/ShoutoutDisplay.css"

interface Props {
  shoutout: Shoutout
  removeShoutout: (id: string) => void
}

const ShoutoutDisplay: FC<Props> = ({ shoutout, removeShoutout }) => { 
  return (
      <div className="shoutout-display">
        <div className="shoutout">
          <span className="shoutout-to"><b>Shoutout to {shoutout.to}</b></span>
          <span className="from-text"> - from {shoutout.from}</span>
          <br />
          <span><i>"{shoutout.text}"</i></span>
        </div>
        <button onClick={
          () => {
            if (shoutout.id)
              removeShoutout(shoutout.id)
          }
        }>Delete</button>
      </div>
    )
  }
  
  export default ShoutoutDisplay