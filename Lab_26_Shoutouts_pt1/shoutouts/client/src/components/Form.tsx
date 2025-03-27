import { FC, useState } from "react"
import Shoutout from "../interfaces/Shoutout"
import "../component-styles/Form.css"

interface Props {
    addShoutout: (newShoutout: Shoutout) => void
}

const Form: FC<Props> = ({ addShoutout }) => {
    const [newShoutout, setNewShoutout] = useState<Shoutout>({
        to: "",
        from: "",
        text: ""
    })

    const handleSubmit = () => {
        addShoutout(newShoutout)
        setNewShoutout({to: "", from: "", text: ""})
    }
    
    return (
      <div className="shoutout-form">
        <h3>Leave a Shout Out!</h3>
        <div className="form">
            <label htmlFor="to">To</label>
            <input 
                type="text"
                name="to"
                id="to"
                value={newShoutout.to}
                onChange={e => setNewShoutout({...newShoutout, to: e.target.value})}
            />
            <label htmlFor="from">From</label>
            <input 
                type="text"
                name="from"
                id="from"
                value={newShoutout.from}
                onChange={e => setNewShoutout({...newShoutout, from: e.target.value})}
            />
            <label htmlFor="shoutout-text">Shout Out</label>
            <textarea 
                name="shoutout-text"
                id="shoutout-text"
                value={newShoutout.text}
                onChange={e => setNewShoutout({...newShoutout, text: e.target.value})}
            />
            <button onClick={handleSubmit}>Submit Shout Out!</button>
        </div>
      </div>
    )
  }
  
  export default Form