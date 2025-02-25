/*import { useState } from "react"
import "../ArraysEx.sass"

import Colors from "./Colors"
import Pets from "./Pets"

const ArraysEx = () => {
    const [colors, setColors] = useState(["red", "orange", "yellow"])
    const [addColor, setAddColor] = useState("Green")

    const [pet: Pet, setPet] = useState(
        [
            {name: "Sullivan", type: "horse", id: 1}, 
            {name: "Trixie", type: "cat", id: 2}, 
            {name: "Prince", type: "cat", id: 3}
        ])
    const [petType, setPetType] = useState(["horse", "cat", "cat"])
  
    return (
      <div className="wrapper">
        <Colors {...{colors, setColors, addColor, setAddColor}}/>
        <Pets />
        <br/> <br/>
      </div>
    )
}

export default ArraysEx */