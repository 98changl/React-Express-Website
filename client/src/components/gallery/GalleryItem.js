function GalleryItem(props) {
    return (
        <li className='row mb-3'>
            <div>
                <a href={props.image} target='_blank' rel='noreferrer'>
                    <img
                        alt={props.title}
                        className='image'
                        src={props.image}
                    />
                </a>
                <p className='text text-center my-2'>{props.description}</p>
            </div>
        </li>
    )
}

export default GalleryItem;