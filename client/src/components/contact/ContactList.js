import ContactItem from "./ContactItem";

function ContactList(props) {
    return (
        <ul className='nopoints contactlist'>
            {props.items.map(items => (
                <ContactItem 
                key={items.id} 
                id={items.id} 
                title={items.title}
                link={items.link}
                description={items.description}
                />
            ))}
        </ul>
    );
}

export default ContactList;