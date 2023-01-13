import DocumentList from '../components/documents/DocumentList';

import about from '../files/About Me.pdf';
import resume from '../files/Resume.pdf';

const docs = [
    {
        id: 'd1',
        title: 'about',
        type: 'pdf',
        description: 'About Me',
        src: about
    },
    {
        id: 'd2',
        title: 'resume',
        type: 'pdf',
        description: 'My Resume',
        src: resume
    }
];

function Documents() {
    return (
        <div>
            <DocumentList items={docs} />
        </div>
    );
}

export default Documents;