function PortfolioItem(props) {
    return (
        <li className='container-fluid mb-5'>
            <div className='card p-3 grid text-center'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <div className=''>
                            <h2 className='subtitle text-center fw-bold'>{props.title}</h2>
                            <span className='text text-center fw-bold'>Technologies Used: </span>
                            <span className='text text-center fst-italic'>{props.skills}</span>
                            <br /><br />
                            <p className='text text-start'>{props.description}</p>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <a className='text-center' href={props.link} target='_blank' rel='noreferrer'>
                            <img className='portfolioimg' src={props.src} alt={props.title} />
                        </a>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default PortfolioItem;