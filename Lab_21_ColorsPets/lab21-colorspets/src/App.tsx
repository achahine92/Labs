import { useState } from "react"
import "./ArraysEx.sass"

import Colors from "./Components/Colors"
import Pets from "./Components/Pets"
import Pet from "./Interfaces/Pet.ts"

const ArraysEx = () => {
    const [colors, setColors] = useState(["red", "orange", "yellow"])
    const [pets, setPets] = useState(
      [
          {name: "Sullivan", type: "horse", id: 0}, 
          {name: "Trixie", type: "cat", id: 1}, 
          {name: "Prince", type: "cat", id: 2}
      ])

    const addColor = (color: string): void => {
      setColors((cs) => [...cs, color])
    }

    const deletePet = (pet: Pet, index: number): void => {
      setPets((ps) => ps.filter((pet, i) => i !== index))
    }
  
    return (
      <div className="wrapper">
        <Colors {...{colors, setColors, addColor}}/>
        <Pets {...{pets, deletePet}}/>
        <br/> <br/>
      </div>
    )
}

export default ArraysEx