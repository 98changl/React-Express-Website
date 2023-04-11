function ContactItem(props) {
    return (
        <li className='mb-2'>
            <div className='d-flex justify-content-center align-items-start'>
                <h3 className='text mr-3'>{props.title}: </h3>
                <p className='text m-0'>{props.description}</p>
                <a className='text' href={props.link} target='_blank' rel='noreferrer'>
                    {props.link}
                </a>
            </div>
        </li>
    )
}

export default ContactItem;