import ContactItem from "./ContactItem";

function ContactList(props) {
    return (
        <ul>
            {props.items.map(items => (
                <ContactItem 
                key={items.id} 
                id={items.id} 
                title={items.title}
                link={items.link}
                />
            ))}
        </ul>
    );
}

export default ContactList;