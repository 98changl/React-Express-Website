function PortfolioItem(props) {
    return (
        <li className='container-fluid mb-5'>
            <div className='grid text-center'>

                <div className='row align-items-center'>
                    <div className='col-md-3'>
                        <div className=''>
                            <h2 className='subtitle text-center fw-bold'>{props.title}</h2>
                            <p className='text text-center fst-italic'>{props.date}</p>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <p className='text text-center fw-bold'>Technologies Used:</p>
                        <p className='text text-center fst-italic'>{props.skills}</p>
                        <p className='text text-start'>{props.description}</p>
                    </div>
                    <div className='col-md-5'>
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