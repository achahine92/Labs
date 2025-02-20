import { FC } from "react";
import Pet from "../Interfaces/Pet";

interface Props {
    pets: Pet[]
    deletePet: (pet: Pet, index: number) => void
}
const Pets: FC<Props> = ({
    pets,
    deletePet
}) => (
    <div className="wrapper">
        <h2>Pets</h2>
        <table className="pet_table">
            <thead className="table_headers">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                    {pets.map((pet, index) => (
                        <>
                        <tr key={pet.id}>
                            <td >{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><button className="table_buttons"
                                onClick={ () => deletePet(pet, index)}
                                >Delete</button>
                            </td>
                        </tr>
                        </>
                    ))}
            </tbody>
        </table>
    </div>
)



export default Pets