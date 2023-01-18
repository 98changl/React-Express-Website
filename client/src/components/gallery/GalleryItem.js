function GalleryItem(props) {
    return (
        <li className='galleryitem'>
            <div>
                <a href={props.image} target='_blank' rel='noreferrer'>
                <img
                    alt={props.title}
                    className='image'
                    src={props.image}
                />
                </a>
                <p className='center'>{props.description}</p>
            </div>
        </li>
    )
}

export default GalleryItem;