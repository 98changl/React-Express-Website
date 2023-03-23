import profile from '../media/linked.jpg';
import grad from '../media/grad.jpg';
import pdficon from '../media/pdficon.png';
import keylime from '../media/KeyLimanPie.jpg';

import GalleryList from '../components/gallery/GalleryList';

const images = [
    {
        id: 'i1',
        title: 'Profile',
        image: profile,
        description: 'Personal Photograph'
    },
    {
        id: 'i2',
        title: 'Graduation',
        image: grad,
        description: 'Graduation Photograph'
    },
    {
        id: 'i3',
        title: 'KeyLime',
        image: keylime,
        description: 'Key Liman Pie'
    }
];

function Gallery() {
    return (
        <div className='center'>
            <h1>Gallery</h1>
            <GalleryList items={images} />
        </div>
    );
}

export default Gallery;