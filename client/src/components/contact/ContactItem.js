import { Link } from 'react-router-dom';

function ContactItem(props) {
    return (
        <li className='mb-2'>
            <div className='d-flex justify-content-center align-items-start'>
                <h3 className='text mr-2'>{props.title}:</h3>
                <p className='text m-0'>{props.description}</p>
                <Link className='text' to={props.link}>{props.link}</Link>
            </div>
        </li>
    )
}

export default ContactItem;