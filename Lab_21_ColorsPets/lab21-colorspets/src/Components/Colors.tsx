import { FC } from "react"

interface Props {
    colors: string[]
    addColor: (color: string) => void
}

const Colors: FC<Props> = ({
    colors,
    addColor
}) => (
    <div className="wrapper">
    <h2>Colors</h2>
    <ul>
        {colors.map((color, index) => <li key={color}>{index + 1}. {color}</li>)}
    </ul>
    <div className="color_buttons">
                    <button onClick={ () => addColor("Green")}>
                        Add Green
                    </button>
                    <button onClick={ () => addColor("Violet")}>
                        Add Violet
                    </button>
                    <button onClick={ () => addColor("Blue")}>
                        Add Blue
                    </button>
    </div>
    <br/> <br/>
    </div>
)

export default Colors