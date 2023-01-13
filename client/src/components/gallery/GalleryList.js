import GalleryItem from "./GalleryItem";

function GalleryList(props) {
    return (
        <ul>
            {props.items.map(items => (
                <GalleryItem 
                key={items.id} 
                id={items.id} 
                title={items.title}
                image={items.image}
                description={items.description}
                />
            ))}
        </ul>
    );
}

export default GalleryList;