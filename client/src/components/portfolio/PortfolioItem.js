function PortfolioItem(props) {
    return (
        <li className='container-fluid mb-5'>
            <div className='grid text-center'>

                <div className='row'>
                    <div className='col-md-3'>
                        <h2 className='subtitle text-center'>{props.title}</h2>
                        <p className='text text-center'>{props.date}</p>
                    </div>
                    <div className='col-md-4'>
                        <p className='text text-center'>Technologies Used:</p>
                        <p className='text text-center'>{props.skills}</p>
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