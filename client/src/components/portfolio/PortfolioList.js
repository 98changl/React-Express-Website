import PortfolioItem from "./PortfolioItem";

function PortfolioList(props) {
    return (
        <ul className='nopoints'>
            {props.items.map(items => (
                <PortfolioItem
                    key={items.id}
                    id={items.id}
                    title={items.title}
                    date={items.date}
                    link={items.link}
                    src={items.src}
                    skills={items.skills}
                    description={items.description}
                />
            ))}
        </ul>
    );
}

export default PortfolioList;