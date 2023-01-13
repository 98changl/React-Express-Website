function ContactItem(props) {
    return (
        <li>
            <div>
                <h3>{props.title}</h3>
            </div>
            <div>
                <a href={props.link} target='_blank' rel='noreferrer'>
                    {props.link}
                </a>
            </div>
        </li>
    )
}

export default ContactItem;