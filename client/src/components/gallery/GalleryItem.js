function GalleryItem(props) {
    return (
        <li>
            <div>
                <a href={props.image} target='_blank' rel='noreferrer'>
                <img
                    alt={props.title}
                    className='image'
                    src={props.image}
                />
                </a>
                <p>
                    {props.description}
                </p>
            </div>
        </li>
    )
}

export default GalleryItem;