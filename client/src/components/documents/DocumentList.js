import DocumentItem from "./DocumentItem";

function DocumentList(props) {
    return (
        <ul className='nopoints'>
            {props.items.map(items => (
                <DocumentItem
                    key={items.id}
                    id={items.id}
                    title={items.title}
                    type={items.type}
                    description={items.description}
                    src={items.src}
                />
            ))}
        </ul>
    );
}

export default DocumentList;