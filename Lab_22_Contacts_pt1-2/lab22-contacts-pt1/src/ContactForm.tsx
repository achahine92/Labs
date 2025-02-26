import Contact from "./Contact"
import { FC, Dispatch, SetStateAction } from "react"

interface Props {
    newContact: Contact
    onAdd: (newContact: Contact) => void
    onUpdate: (contact: Contact) => void
    setNewContact: Dispatch<SetStateAction<Contact>>
    defaultContact: Contact
    isEditing: boolean
}

const ContactForm: FC<Props> = ({ 
    newContact, 
    setNewContact, 
    onAdd, 
    onUpdate,
    defaultContact,
    isEditing 
}) => {

    const handleSubmit = () => {
        const newId = Math.floor(Math.random() *1000)
        const nC = {...newContact, id: newId}
        isEditing ? onUpdate(nC) : onAdd(nC)

        setNewContact(defaultContact)
    }    

    return (
        <div className="wrapper">
            <h2>Contact Form</h2>
                    <div className="contact-form">
                        <div className="first-name">
                            <label htmlFor="first-name">First Name: </label>
                            <input 
                                type="text" 
                                name="firstName" 
                                id="first-name" 
                                placeholder=""
                                value={newContact.firstName}
                                onChange={e => setNewContact(nC => 
                                    ({...nC, firstName: e.target.value}))}
                            /> 
                        </div>
                        <div className="last-name">
                            <label htmlFor="last-name">Last Name: </label>
                            <input 
                                type="text" 
                                name="lastName" 
                                id="last-name" 
                                placeholder=""
                                value={newContact.lastName}
                                onChange={e => setNewContact(nC => 
                                    ({...nC, lastName: e.target.value}))}
                            />
                        </div>
                        <div className="phone-number">
                            <label htmlFor="phone-number">Phone Number: </label>
                            <input 
                                type="number" 
                                name="phoneNumber" 
                                id="phone-number" 
                                placeholder="##########"
                                value={newContact.phoneNumber}
                                onChange={e => setNewContact(nC => 
                                    ({...nC, phoneNumber: +e.target.value}))}
                            />
                        </div>
                        <div className="form-clickables">
                            <label htmlFor="is-favorite">Set as Favorite?</label>
                            <input className="is-favorite"
                                type="checkbox" 
                                name="isFavorite" 
                                id="is-favorite" 
                                checked={newContact.isFavorite}
                                onChange={(e) => setNewContact(nC => 
                                    ({...nC, isFavorite: e.target.checked}))}
                            />
                            <button className="add-contact"
                                type="button" 
                                onClick={handleSubmit}
                            >Add Contact</button>
                        </div>
                    </div>
        </div>
    )
}

export default ContactForm