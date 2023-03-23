import DocumentList from '../components/documents/DocumentList';

import resume from '../media/Resume.pdf';

const docs = [
    {
        id: 'd1',
        title: 'resume',
        type: 'pdf',
        description: 'My Resume',
        src: resume
    }
];

function Documents() {
    return (
        <div className='center'>
            <h1 className='center'>Documents</h1>
            <DocumentList items={docs} />
        </div>
    );
}

export default Documents;