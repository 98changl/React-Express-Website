import profile from '../img/linked.jpg';
import grad from '../img/grad.jpg';
import pdficon from '../img/pdficon.png';
import keylime from '../img/KeyLimanPie.jpg';

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
        title: 'Icon',
        image: pdficon,
        description: 'Custom PDF Icon for Website'
    },
    {
        id: 'i4',
        title: 'KeyLime',
        image: keylime,
        description: 'Photoshopped Key Lime Pie'
    }
];

function Gallery() {
    return (
        <div>
            <GalleryList items={images} />
        </div>
    );
}

export default Gallery;