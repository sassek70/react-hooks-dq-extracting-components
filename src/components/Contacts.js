import ContactItem from "./ContactItem"



const Contacts = (props) => {

    const contactCards = props.contacts.map((contact) => {
        return ( <ContactItem key={contact.id} name={contact.name}/>)
    })

    return (
        <>
            <h2>Contacts</h2>
            <ul className="contacts">
                {contactCards}
            </ul>
        </>
    )
}

export default Contacts