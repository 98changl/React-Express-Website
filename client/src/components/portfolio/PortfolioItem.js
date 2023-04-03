function PortfolioItem(props) {
    return (
        <li className='flex pad'>
            <div className='portfolio content'>
                <h2>{props.title}</h2>
                <p>{props.date}</p>
                <p>Technologies Used:</p>
                <p>{props.skills}</p>
            </div>

            <p className='portfolio content text'>{props.description}</p>

            <a className='content' href={props.link} target='_blank' rel='noreferrer'>
                <img className='portfolioimg' src={props.src} alt={props.title} />
            </a>
        </li>
    );
}

export default PortfolioItem;