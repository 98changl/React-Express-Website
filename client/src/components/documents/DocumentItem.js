import pdficon from '../../img/pdficon.png';

function documentType(type) {
    if (type === 'pdf') {
        return pdficon;
    }
}

function DocumentItem(props) {
    return (
        <li>
            <a href={props.src} target='_blank' rel='noreferrer'>
                <img className='icon' src={documentType(props.type)} alt={props.title}/>
            </a>
            <p>{props.description}</p>
        </li>
    );
}

export default DocumentItem;