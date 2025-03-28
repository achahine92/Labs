//import ContactList from "./ContactList"
import { useState } from "react"
import Contact from "./Contact"
import ContactList from "./ContactList"
import ContactForm from "./ContactForm"

const Home = () => {
    const [contacts, setContacts] = useState<Contact[]>([
        { id: 1, firstName: "Ron", lastName: "Weasley", phoneNumber: 1231231234, isFavorite: true }, 
        { id: 2, firstName: "Hermione", lastName: "Granger", phoneNumber: 2342342345, isFavorite: true },
        { id: 3, firstName: "Gilderoy", lastName: "Lockhart", phoneNumber: 3453453456, isFavorite: false }
    ])

    const defaultContact: Contact = {
        id: 0,
        firstName: "",  
        lastName: "", 
        phoneNumber: 8005555555,
        isFavorite: false
    }

    const [newContact, setNewContact] = useState<Contact>(defaultContact)
    const [isContactFavorite, setIsContactFavorite] = useState<Contact | null>(null)

    const onAdd = (newContact: Contact) => {
        setContacts((cs) => [...cs, newContact])
    }

    const onDelete = (contact: Contact) => {
        setContacts(contacts.filter(c => c.id !== contact.id))
    }

    const onUpdate = (updatedContact: Contact) => {
        setContacts(contacts.map(contact => 
            contact.id === updatedContact.id 
            ? updatedContact
            : contact
        ))
    }

    return (
        <div className="body">
            <ContactForm 
                newContact={isContactFavorite || newContact} 
                setNewContact={setNewContact} 
                onAdd={onAdd}
                onUpdate={onUpdate}
                defaultContact={defaultContact}
                isEditing={isContactFavorite !== null}
            />
            <ContactList 
                contacts={contacts} 
                onDelete={onDelete}
                onUpdate={onUpdate}
            />
        </div>
    )
}

export default Home