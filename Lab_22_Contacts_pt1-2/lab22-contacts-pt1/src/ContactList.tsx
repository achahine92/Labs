import { FC } from "react"
import Contact from "./Contact"
import ContactCard from "./ContactCard"

interface Props {
    contacts: Contact[]
    onDelete: (contact: Contact) => void
    onUpdate: (contact: Contact) => void
}

const ContactList: FC<Props> = ({ contacts, onDelete, onUpdate }) => {

    return (
        <>
        <div className="contact-list">
            {contacts.map(contact => 
                <ContactCard 
                    key={contact.id} 
                    contact={contact} 
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                />
            )}
        </div>
    </>
    )
}

export default ContactList